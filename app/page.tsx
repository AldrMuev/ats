import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, BarChart2, CheckCircle, FileText, Mail, MapPin, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ApplySense</span>
          </div>
          <div className="flex items-center gap-4">
            <Button>Join the Waitlist</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Resume Tracker for Ontario Job Seekers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    ApplySense learns what works — the more you track, the smarter it gets.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Join the Waitlist <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-muted/50 p-2 shadow-lg lg:order-last">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-48 w-48">
                    <div className="absolute inset-0 rounded-full border-8 border-muted/30"></div>
                    <div
                      className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent"
                      style={{ transform: "rotate(45deg)" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary">78%</div>
                        <div className="text-sm text-muted-foreground">Match Score</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=550&width=850"
                  alt="ApplySense Dashboard Preview"
                  width={850}
                  height={550}
                  className="mx-auto h-full w-full object-cover opacity-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Three simple steps to get personalized insights for your job search
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 text-center shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Upload or Create Resume</h3>
                <p className="text-muted-foreground">
                  Start by uploading your existing resume or create a new one with our guided templates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 text-center shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Track Each Application</h3>
                <p className="text-muted-foreground">
                  Log every job you apply to, including company, position, and which resume version you used.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 text-center shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Get Personalized Insights</h3>
                <p className="text-muted-foreground">
                  Receive AI-powered feedback and analytics that improve as you track more applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Smarter with Every Application Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Smarter with Every Application
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    See what resumes perform best and get AI feedback tailored to you.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p>Identify which resume versions get more responses</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p>Receive personalized keyword suggestions for specific industries</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p>Track application-to-interview conversion rates</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p>Get AI recommendations that improve with your feedback</p>
                  </li>
                </ul>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-muted/50 p-6 shadow-lg">
                <div className="flex h-full flex-col">
                  <div className="mb-6 text-center">
                    <h3 className="text-lg font-semibold">Your Application Performance</h3>
                  </div>
                  <div className="relative flex-1">
                    <div className="absolute bottom-0 left-0 h-[30%] w-6 rounded-t-md bg-muted"></div>
                    <div className="absolute bottom-0 left-[calc(16.6%)] h-[45%] w-6 rounded-t-md bg-muted"></div>
                    <div className="absolute bottom-0 left-[calc(33.3%)] h-[40%] w-6 rounded-t-md bg-muted"></div>
                    <div className="absolute bottom-0 left-[calc(50%)] h-[60%] w-6 rounded-t-md bg-muted"></div>
                    <div className="absolute bottom-0 left-[calc(66.6%)] h-[75%] w-6 rounded-t-md bg-primary"></div>
                    <div className="absolute bottom-0 left-[calc(83.3%)] h-[85%] w-6 rounded-t-md bg-primary"></div>

                    {/* Trend line */}
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d="M0,70 C10,65 20,60 30,60 C40,60 50,40 60,40 C70,40 80,25 90,15 L100,15"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                    <span>Week 5</span>
                    <span>Week 6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored for Ontario Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Tailored for Ontario</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Local insights that give you an edge in the Ontario job market
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Toronto</span>
                </div>
                <p className="text-sm text-muted-foreground">Tech & Finance Hub</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Ottawa</span>
                </div>
                <p className="text-sm text-muted-foreground">Government & Tech</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Waterloo</span>
                </div>
                <p className="text-sm text-muted-foreground">Tech & Innovation</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 text-center">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Hamilton</span>
                </div>
                <p className="text-sm text-muted-foreground">Healthcare & Manufacturing</p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Ontario-Specific Features</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Public vs Private Sector Insights</p>
                    <p className="text-sm text-muted-foreground">Optimize your resume for government or private jobs</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Regional Keyword Analysis</p>
                    <p className="text-sm text-muted-foreground">
                      See what terms employers are looking for in your area
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Industry-Specific Templates</p>
                    <p className="text-sm text-muted-foreground">Tailored for Ontario's leading industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Local Hiring Trend Alerts</p>
                    <p className="text-sm text-muted-foreground">Stay informed about job market changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Early Access Invitation */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-lg border bg-muted/30 p-8 shadow-lg">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Waitlist</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Be first to try ApplySense and shape the product with feedback.
                  </p>
                </div>
                <div className="w-full max-w-md space-y-2">
                  <form className="flex w-full max-w-sm flex-col gap-2 sm:flex-row sm:gap-0">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-r-none sm:rounded-l-md sm:rounded-r-none"
                    />
                    <Button type="submit" className="rounded-l-none sm:rounded-l-none sm:rounded-r-md">
                      <Send className="mr-2 h-4 w-4" />
                      Join Now
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground">
                    We'll notify you when ApplySense is ready for early access. No spam, ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">ApplySense</span> — Launching soon in Ontario
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
