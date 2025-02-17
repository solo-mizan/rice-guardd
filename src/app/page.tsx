import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Smartphone, CloudSun, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="h-[100dvh] w-screen overflow-hidden bg-gradient-to-b from-green-50 via-emerald-50 to-cyan-50 dark:from-green-950 dark:via-emerald-950 dark:to-cyan-950 text-foreground relative">
      {/* Rice Leaf Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <Image src="/rice-leaf-vector.svg" alt="Rice Leaf Background" layout="fill" objectFit="cover" />
      </div>

      <main className="h-full w-full snap-y snap-mandatory overflow-y-auto relative z-10">
        <section className="h-full w-full snap-start flex flex-col justify-between p-4">
          <header>
            <div className="flex items-center space-x-2">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">RiceGuard</span>
            </div>
          </header>

          <div className="flex-grow flex flex-col justify-center items-center text-center">
            <div className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700 text-transparent bg-clip-text">
              <h1 className="text-4xl font-bold mb-4">AI-Powered Rice Crop Protection</h1>
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-xs">
              Detect 9 types of rice leaf diseases with up to 96% accuracy using our custom ML model.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white w-full max-w-xs"
            >
              <Link href="#features" className="inline-flex items-center justify-center">
                Discover RiceGuard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="features" className="h-full w-full snap-start flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl font-bold text-center mb-6">Advanced Features</h2>
          <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
            <FeatureCard
              icon={<Smartphone className="w-8 h-8 text-primary" />}
              title="96% Accurate Detection"
              description="Custom ML model identifies 9 rice leaf diseases."
            />
            <FeatureCard
              icon={<CloudSun className="w-8 h-8 text-primary" />}
              title="Smart Recommendations"
              description="Tailored advice based on weather and disease type."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-primary" />}
              title="Comprehensive Analysis"
              description="Detailed reports with treatment plans and prevention strategies."
            />
          </div>
        </section>

        <section
          id="cta"
          className="h-full w-full snap-start flex flex-col justify-center items-center p-4 bg-gradient-to-br from-green-600 to-emerald-600 dark:from-green-800 dark:to-emerald-800 text-white"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Protect Your Rice Crops Today</h2>
          <p className="text-base mb-6 text-center max-w-xs">
            Join farmers worldwide using our 96% accurate disease detection technology.
          </p>
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-100 w-full max-w-xs">
            <Link href="/login" className="inline-flex items-center justify-center">
              Use RiceGuard Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-950 shadow-md">
      <CardHeader className="flex flex-row items-center space-y-0 gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}

