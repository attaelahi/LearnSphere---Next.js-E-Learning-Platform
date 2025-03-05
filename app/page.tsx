import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { FeaturedCourses } from "@/components/featured-courses"
import { Testimonials } from "@/components/testimonials"
import { AboutSection } from "@/components/about-section"
import { Categories } from "@/components/categories"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential with{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    LearnSphere
                  </span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover thousands of courses taught by expert instructors from around the world. Learn at your own
                  pace and achieve your goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input type="search" placeholder="Search for courses..." className="pl-9 w-full" />
                </div>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Start Learning
                </Button>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row items-start">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  {[1, 2, 3, 4].map((id) => (
                    <img
                      key={id}
                      className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                      src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? "women" : "men"}/${id + 20}.jpg`}
                      alt={`User ${id}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Join over <span className="font-bold text-foreground">10,000+</span> students already learning on
                  LearnSphere
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Hero Image"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-secondary w-12 h-12 flex items-center justify-center">
                      <span className="font-bold text-secondary-foreground">4.9</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Highest Rated Platform</h3>
                      <p className="text-sm text-muted-foreground">Based on 50,000+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* Featured Courses Section */}
      <FeaturedCourses />

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <AboutSection />
    </div>
  )
}

