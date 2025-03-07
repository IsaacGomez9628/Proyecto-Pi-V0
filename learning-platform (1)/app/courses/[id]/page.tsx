import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, BarChart, Check, Star, Users } from "lucide-react"

export default function CourseIntroduction({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendríamos los detalles del curso desde una API o base de datos
  const courseDetails = {
    title: "Fundamentos de Python",
    description:
      "Aprende los fundamentos de Python, uno de los lenguajes de programación más populares y versátiles. Este curso te proporcionará una base sólida para tu carrera en desarrollo de software.",
    duration: "4 semanas",
    level: "Principiante",
    rating: 4.8,
    students: 1234,
    icon: "🐍",
    instructor: "Ana Martínez",
    topics: [
      "Introducción a Python y configuración del entorno",
      "Variables, tipos de datos y operadores",
      "Estructuras de control de flujo",
      "Funciones y módulos",
      "Estructuras de datos: listas, tuplas y diccionarios",
      "Programación orientada a objetos básica",
      "Manejo de excepciones",
      "Trabajando con archivos",
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="bg-secondary/30 backdrop-blur-sm border-secondary mb-8">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">{courseDetails.icon}</span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-medium">{courseDetails.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold">{courseDetails.title}</CardTitle>
                <CardDescription className="text-lg">
                  Instructor: {courseDetails.instructor} | {courseDetails.students.toLocaleString()} estudiantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{courseDetails.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{courseDetails.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart className="w-4 h-4 mr-1" />
                    <span>{courseDetails.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{courseDetails.students.toLocaleString()} estudiantes</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Inscribirse al Curso
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-secondary/30 backdrop-blur-sm border-secondary">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Contenido del Curso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {courseDetails.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-secondary/30 backdrop-blur-sm border-secondary sticky top-20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">¿Qué aprenderás?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Dominar la sintaxis básica de Python</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Crear programas interactivos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Trabajar con estructuras de datos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Implementar programación orientada a objetos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Comenzar Ahora
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

