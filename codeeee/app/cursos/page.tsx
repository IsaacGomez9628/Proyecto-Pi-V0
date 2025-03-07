import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, Filter, BookOpen, Clock, BarChart } from "lucide-react"

export default function CoursesPage() {
  // Datos de ejemplo para los cursos
  const courses = [
    {
      id: 1,
      title: "Python para Principiantes",
      description:
        "Aprende los fundamentos de Python desde cero. Ideal para quienes no tienen experiencia previa en programación.",
      lessons: 24,
      duration: "12 horas",
      level: "Principiante",
      category: "python",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-blue-100",
    },
    {
      id: 2,
      title: "Desarrollo Web con JavaScript",
      description: "Domina JavaScript y aprende a crear sitios web interactivos con las tecnologías más demandadas.",
      lessons: 32,
      duration: "16 horas",
      level: "Intermedio",
      category: "javascript",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-yellow-100",
    },
    {
      id: 3,
      title: "Ciencia de Datos con Python",
      description: "Aprende a analizar y visualizar datos utilizando las bibliotecas más populares de Python.",
      lessons: 28,
      duration: "14 horas",
      level: "Avanzado",
      category: "python",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-green-100",
    },
    {
      id: 4,
      title: "Desarrollo de Aplicaciones Móviles",
      description: "Crea aplicaciones móviles multiplataforma utilizando tecnologías modernas.",
      lessons: 30,
      duration: "15 horas",
      level: "Intermedio",
      category: "mobile",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-purple-100",
    },
    {
      id: 5,
      title: "Introducción a la Inteligencia Artificial",
      description: "Descubre los fundamentos de la IA y cómo implementar algoritmos básicos.",
      lessons: 22,
      duration: "11 horas",
      level: "Intermedio",
      category: "ai",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-red-100",
    },
    {
      id: 6,
      title: "Bases de Datos SQL",
      description: "Aprende a diseñar, implementar y consultar bases de datos relacionales.",
      lessons: 26,
      duration: "13 horas",
      level: "Principiante",
      category: "database",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-indigo-100",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-gray-600 hover:text-purple-600 mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-2xl font-bold">Explora nuestros cursos</h1>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input placeholder="Buscar cursos..." className="pl-10 py-6 rounded-lg" />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="todos" className="mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="mobile">Móvil</TabsTrigger>
              <TabsTrigger value="ai">IA</TabsTrigger>
              <TabsTrigger value="database">Bases de Datos</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            {["python", "javascript", "mobile", "ai", "database"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses
                    .filter((course) => course.category === category)
                    .map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <div className={`${course.color} p-4`}>
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-40 object-cover rounded" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1 text-purple-600" />
            <span>{course.lessons} lecciones</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-purple-600" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-4 w-4 mr-1 text-purple-600" />
            <span>Nivel: {course.level}</span>
          </div>
        </div>

        <Link href={`/cursos/${course.id}`}>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Ver curso</Button>
        </Link>
      </div>
    </div>
  )
}

