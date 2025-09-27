import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, BarChart3, MessageSquare } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background gradient-bg grid-pattern">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">TaskFlow</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About us
              </a>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">
              We just raised $20M in Series B. Learn more
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              Modern project management
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                for the modern world
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
              Simple, intuitive, and powerful platform that helps teams manage projects, track progress, and collaborate
              effectively without the friction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 glow-effect">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold">TaskFlow</span>
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">May 2024</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-purple-400 mb-1">2,847</div>
                  <div className="text-sm text-muted-foreground">Total tasks</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-pink-400 mb-1">89%</div>
                  <div className="text-sm text-muted-foreground">Completion rate</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-blue-400 mb-1">24</div>
                  <div className="text-sm text-muted-foreground">Active projects</div>
                </div>
              </div>

              <div className="h-32 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-lg flex items-end justify-center p-4">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Project Analytics Dashboard</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by teams at over <span className="text-foreground font-semibold">1,000</span> of the world's leading
            organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">NETFLIX</div>
            <div className="text-2xl font-bold">SPOTIFY</div>
            <div className="text-2xl font-bold">AIRBNB</div>
            <div className="text-2xl font-bold">UBER</div>
            <div className="text-2xl font-bold">STRIPE</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Features that work for your
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                future.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Check out our amazing features and experience the power of TaskFlow for yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Dashboard */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                Get a high-level overview of all your projects with real-time insights, progress tracking, and team
                performance metrics in one centralized dashboard.
              </p>
              <Button variant="link" className="p-0 text-purple-400 hover:text-purple-300">
                View dashboard <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            {/* Team Collaboration */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
              <p className="text-muted-foreground mb-6">
                Foster seamless communication and teamwork with integrated chat, file sharing, and real-time updates
                that keep everyone on the same page.
              </p>
              <Button variant="link" className="p-0 text-purple-400 hover:text-purple-300">
                Start collaborating <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>
          </div>

          {/* Code Collaboration Feature */}
          <Card className="mt-8 p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Task Management</h3>
                <p className="text-muted-foreground mb-6">
                  Our advanced task management system ensures that your team's workflow is always optimized. Whether
                  you're integrating with existing tools or starting fresh, TaskFlow adapts to your team's unique needs.
                </p>
                <Button variant="link" className="p-0 text-purple-400 hover:text-purple-300">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <Card className="bg-background/50 border-border/50 p-6">
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-purple-400">// TaskFlow Integration</div>
                  <div className="text-muted-foreground mt-2">
                    <span className="text-blue-400">const</span> <span className="text-foreground">project</span> ={" "}
                    <span className="text-green-400">createProject</span>({"{"}
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-orange-400">name</span>: <span className="text-green-400">"New Feature"</span>
                    ,
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-orange-400">team</span>: <span className="text-foreground">developers</span>,
                  </div>
                  <div className="text-muted-foreground ml-4">
                    <span className="text-orange-400">deadline</span>:{" "}
                    <span className="text-green-400">"2024-06-01"</span>
                  </div>
                  <div className="text-muted-foreground">{"}"});</div>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 glow-effect">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Our powerful project management
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                provides invaluable insights.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Experience the future of project management with our user-friendly dashboard and take advantage of our
              innovative features to boost your team's productivity.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8"
            >
              Start Free Trial
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TaskFlow</span>
              </div>
              <p className="text-muted-foreground text-sm">Modern project management for the modern world.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Work inquiries: work@taskflow.com</div>
                <div>PR and speaking: press@taskflow.com</div>
                <div>New business: newbusiness@taskflow.com</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>398 11th Street, Floor 2</div>
                <div>San Francisco, CA 94103</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Twitter</div>
                <div>Instagram</div>
                <div>TikTok</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 TaskFlow. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
