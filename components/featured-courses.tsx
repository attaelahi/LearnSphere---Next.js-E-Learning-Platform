"use client"

import { CardFooter } from "@/components/ui/card"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Star, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function FeaturedCourses() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              Featured Courses
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Learn from the Best</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our most popular courses and start your learning journey today.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Link
              href={`/courses/${course.id}`}
              key={course.id}
              className="group"
              onMouseEnter={() => setHoveredCourse(index)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  {hoveredCourse === index && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        Preview Course
                      </Button>
                    </div>
                  )}
                  <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
                    {course.category}
                  </Badge>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex items-center justify-between border-t">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.instructorAvatar || "/placeholder.svg"}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium">{course.instructor}</span>
                  </div>
                  <span className="font-bold text-lg">${course.price}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Web Development",
    duration: "48 hours",
    students: 12500,
    rating: 4.9,
    instructor: "Sarah Johnson",
    instructorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    price: 89.99,
  },
  {
    id: 2,
    title: "Data Science and Machine Learning Masterclass",
    description: "Master Python, data analysis, visualization, and machine learning algorithms.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Data Science",
    duration: "36 hours",
    students: 8750,
    rating: 4.8,
    instructor: "Michael Chen",
    instructorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    price: 99.99,
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of user interface and user experience design for digital products.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Design",
    duration: "24 hours",
    students: 6300,
    rating: 4.7,
    instructor: "Emma Rodriguez",
    instructorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
    price: 79.99,
  },
]

