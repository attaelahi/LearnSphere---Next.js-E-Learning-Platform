"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="px-3 py-1">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our community of learners who have transformed their careers.
            </p>
          </div>
        </div>
        <div className="mt-8 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-muted/50 border-none shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5",
                              i < testimonial.rating ? "fill-secondary text-secondary" : "fill-muted text-muted",
                            )}
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg italic text-center">"{testimonial.quote}"</blockquote>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center pb-6">
                      <Avatar className="h-12 w-12 mb-2">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Alex Thompson",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    quote:
      "LearnSphere completely transformed my career. I went from knowing nothing about web development to landing a job as a frontend developer in just 6 months!",
    rating: 5,
    course: "Web Development Bootcamp",
  },
  {
    name: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The data science course was comprehensive and practical. The instructor was knowledgeable and the projects helped me build a strong portfolio.",
    rating: 5,
    course: "Data Science Masterclass",
  },
  {
    name: "James Wilson",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "The UI/UX design course gave me the skills and confidence to transition into a design role. The instructor's feedback was invaluable.",
    rating: 4,
    course: "UI/UX Design Fundamentals",
  },
]

