"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: number
  email: string
  first_name: string
  last_name: string
}

interface AuthContextType {
  user: User | null
  accessToken: string | null
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

interface RegisterData {
  first_name: string
  last_name: string
  email: string
  password: string
  password_confirm: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('access_token')

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setAccessToken(storedToken)
    }
    setIsLoading(false)

    // Debug environment variable
    console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
    console.log('typeof NEXT_PUBLIC_API_URL:', typeof process.env.NEXT_PUBLIC_API_URL)
    console.log('All env vars:', Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC')))
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Force the correct API URL
      const apiUrl = 'http://localhost:8000/api'
      console.log('Login attempt:', { email, apiUrl })
      const requestBody = JSON.stringify({ email, password })
      console.log('Request body:', requestBody)

      const response = await fetch(`${apiUrl}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      })

      console.log('Login response status:', response.status)
      console.log('Login response headers:', Object.fromEntries(response.headers.entries()))

      const responseText = await response.text()
      console.log('Login raw response:', responseText)

      let data
      try {
        data = JSON.parse(responseText)
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError)
        throw new Error('Invalid response from server')
      }

      console.log('Login response data:', data)

      if (response.ok) {
        console.log('Login successful, storing tokens...')
        // Store tokens and user data
        localStorage.setItem('access_token', data.access)
        localStorage.setItem('refresh_token', data.refresh)
        localStorage.setItem('user', JSON.stringify(data.user))

        setUser(data.user)
        setAccessToken(data.access)
        console.log('Login data stored successfully')
        return true
      } else {
        console.error('Login failed with status:', response.status, 'data:', data)
        throw new Error(data.error || 'Login failed')
      }
    } catch (error) {
      console.error('Login error caught:', error)
      console.error('Error type:', typeof error)
      console.error('Error message:', error instanceof Error ? error.message : error)
      return false
    }
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Force the correct API URL
      const apiUrl = 'http://localhost:8000/api'
      console.log('Register attempt:', { userData, apiUrl })
      const requestBody = JSON.stringify(userData)
      console.log('Register request body:', requestBody)

      const response = await fetch(`${apiUrl}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      })

      console.log('Register response status:', response.status)
      console.log('Register response headers:', Object.fromEntries(response.headers.entries()))

      const responseText = await response.text()
      console.log('Register raw response:', responseText)

      let data
      try {
        data = JSON.parse(responseText)
      } catch (parseError) {
        console.error('Failed to parse register response as JSON:', parseError)
        throw new Error('Invalid response from server')
      }

      console.log('Register response data:', data)

      if (response.ok) {
        console.log('Registration successful')
        return true
      } else {
        console.error('Registration failed with status:', response.status, 'data:', data)
        throw new Error(data.message || 'Registration failed')
      }
    } catch (error) {
      console.error('Registration error caught:', error)
      console.error('Error type:', typeof error)
      console.error('Error message:', error instanceof Error ? error.message : error)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    setUser(null)
    setAccessToken(null)
  }

  const value: AuthContextType = {
    user,
    accessToken,
    login,
    register,
    logout,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}