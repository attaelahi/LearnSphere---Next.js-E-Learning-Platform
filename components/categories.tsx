import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Code, Database, LineChart, Palette, BookOpen, Video, Globe, Briefcase } from "lucide-react"

export function Categories() {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              Categories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Course Categories
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover courses in various fields to enhance your skills and advance your career.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="group">
              <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:border-primary/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="p-2 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{category.courses} courses</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const categories = [
  {
    name: "Web Development",
    icon: Code,
    courses: 120,
    href: "/category/web-development",
  },
  {
    name: "Data Science",
    icon: Database,
    courses: 85,
    href: "/category/data-science",
  },
  {
    name: "Business",
    icon: Briefcase,
    courses: 95,
    href: "/category/business",
  },
  {
    name: "Design",
    icon: Palette,
    courses: 75,
    href: "/category/design",
  },
  {
    name: "Marketing",
    icon: LineChart,
    courses: 65,
    href: "/category/marketing",
  },
  {
    name: "Photography",
    icon: Video,
    courses: 40,
    href: "/category/photography",
  },
  {
    name: "Languages",
    icon: Globe,
    courses: 55,
    href: "/category/languages",
  },
  {
    name: "Academic",
    icon: BookOpen,
    courses: 70,
    href: "/category/academic",
  },
]

