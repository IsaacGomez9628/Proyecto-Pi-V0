import { Navbar } from "@/components/ui/navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BarChart, BookOpen, Star } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Fundamentos de Python",
    level: "Principiante",
    duration: "4 semanas",
    rating: 4.8,
    students: 1234,
    icon: "🐍",
  },
  {
    id: 2,
    title: "JavaScript Avanzado",
    level: "Intermedio",
    duration: "6 semanas",
    rating: 4.7,
    students: 987,
    icon: "🌟",
  },
  {
    id: 3,
    title: "Desarrollo Web con React",
    level: "Intermedio",
    duration: "8 semanas",
    rating: 4.9,
    students: 2345,
    icon: "⚛️",
  },
  {
    id: 4,
    title: "Ciencia de Datos con Python",
    level: "Avanzado",
    duration: "10 semanas",
    rating: 4.6,
    students: 876,
    icon: "📊",
  },
  {
    id: 5,
    title: "Desarrollo de Apps con Flutter",
    level: "Intermedio",
    duration: "8 semanas",
    rating: 4.5,
    students: 654,
    icon: "📱",
  },
  {
    id: 6,
    title: "Machine Learning Básico",
    level: "Intermedio",
    duration: "8 semanas",
    rating: 4.7,
    students: 1098,
    icon: "🤖",
  },
]

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Explora Nuestros Cursos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre una amplia variedad de cursos diseñados para impulsar tu carrera en tecnología
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  )
}

function CourseCard({ course }: { course: any }) {
  return (
    <Card className="bg-secondary/30 backdrop-blur-sm border-secondary hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-4xl">{course.icon}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
        </div>
        <CardTitle className="text-xl font-semibold">{course.title}</CardTitle>
        <CardDescription>{course.students.toLocaleString()} estudiantes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <BarChart className="w-4 h-4 mr-1" />
            <span>{course.level}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Ver Detalles <BookOpen className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

