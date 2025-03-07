import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Clock, BarChart, Play, CheckCircle } from "lucide-react"

export default function CourseDetailPage({ params }) {
  const courseId = params.id

  // Datos de ejemplo para el curso
  const course = {
    id: courseId,
    title: "Python para Principiantes",
    description:
      "Aprende los fundamentos de Python desde cero. Ideal para quienes no tienen experiencia previa en programación. Este curso te llevará desde los conceptos básicos hasta la creación de tus primeros programas.",
    lessons: 24,
    duration: "12 horas",
    level: "Principiante",
    instructor: "María Rodríguez",
    instructorRole: "Desarrolladora Senior",
    instructorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=800",
    color: "bg-blue-100",
    modules: [
      {
        title: "Introducción a Python",
        lessons: [
          { title: "¿Qué es Python?", duration: "15 min", completed: true },
          { title: "Instalación y configuración", duration: "20 min", completed: true },
          { title: "Tu primer programa", duration: "25 min", completed: false },
          { title: "Variables y tipos de datos", duration: "30 min", completed: false },
        ],
      },
      {
        title: "Estructuras de control",
        lessons: [
          { title: "Condicionales if-else", duration: "25 min", completed: false },
          { title: "Bucles while", duration: "20 min", completed: false },
          { title: "Bucles for", duration: "25 min", completed: false },
          { title: "Ejercicios prácticos", duration: "40 min", completed: false },
        ],
      },
      {
        title: "Funciones y módulos",
        lessons: [
          { title: "Definición de funciones", duration: "30 min", completed: false },
          { title: "Parámetros y argumentos", duration: "25 min", completed: false },
          { title: "Módulos incorporados", duration: "20 min", completed: false },
          { title: "Creación de módulos", duration: "35 min", completed: false },
        ],
      },
    ],
  }

  // Calcular el progreso
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((lesson) => lesson.completed).length,
    0,
  )
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link href="/cursos" className="flex items-center text-gray-600 hover:text-purple-600 mr-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Volver a cursos</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Course Hero */}
      <section className={`${course.color} py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-700 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
                  <span>{course.lessons} lecciones</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-600" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-purple-600" />
                  <span>Nivel: {course.level}</span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={course.instructorImage || "/placeholder.svg"}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-sm text-gray-600">{course.instructorRole}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  Continuar aprendiendo
                </Button>
                <Button variant="outline">Descargar recursos</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Tu progreso</span>
                  <span className="text-sm font-medium">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-sm text-gray-600 mt-2">
                  {completedLessons} de {totalLessons} lecciones completadas
                </p>
              </div>

              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />

              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Acceso de por vida</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Certificado de finalización</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Proyectos prácticos</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Soporte del instructor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contenido">
            <TabsList className="mb-8">
              <TabsTrigger value="contenido">Contenido del curso</TabsTrigger>
              <TabsTrigger value="recursos">Recursos</TabsTrigger>
              <TabsTrigger value="discusiones">Discusiones</TabsTrigger>
              <TabsTrigger value="notas">Mis notas</TabsTrigger>
            </TabsList>

            <TabsContent value="contenido">
              <div className="space-y-6">
                {course.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-slate-100 p-4 font-medium">
                      <h3 className="text-lg">
                        Módulo {moduleIndex + 1}: {module.title}
                      </h3>
                    </div>
                    <div className="divide-y">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="p-4 flex items-center justify-between">
                          <div className="flex items-center">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            ) : (
                              <Play className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                            )}
                            <div>
                              <p className="font-medium">{lesson.title}</p>
                              <p className="text-sm text-gray-600">{lesson.duration}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-purple-600">
                            {lesson.completed ? "Repasar" : "Comenzar"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recursos">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Recursos del curso</h3>
                <p className="text-gray-600 mb-6">
                  Aquí encontrarás todos los materiales complementarios para este curso.
                </p>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Guía de Python</p>
                        <p className="text-sm text-gray-600">PDF, 2.5 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Descargar
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded mr-4">
                        <BookOpen className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Ejercicios prácticos</p>
                        <p className="text-sm text-gray-600">ZIP, 1.8 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Descargar
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-2 rounded mr-4">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Cheatsheet de Python</p>
                        <p className="text-sm text-gray-600">PDF, 1.2 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Descargar
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="discusiones">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Discusiones del curso</h3>
                <p className="text-gray-600 mb-6">
                  Participa en las discusiones con otros estudiantes y el instructor.
                </p>

                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-start mb-4">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Usuario"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <p className="font-medium mr-2">Carlos Mendoza</p>
                          <span className="text-xs text-gray-500">hace 2 días</span>
                        </div>
                        <p className="text-gray-700">
                          ¿Alguien puede explicarme mejor cómo funcionan las listas por comprensión en Python?
                        </p>
                      </div>
                    </div>

                    <div className="ml-14">
                      <div className="flex items-start mb-4">
                        <img
                          src={course.instructorImage || "/placeholder.svg"}
                          alt={course.instructor}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <p className="font-medium mr-2">{course.instructor}</p>
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Instructor</span>
                            <span className="text-xs text-gray-500 ml-2">hace 1 día</span>
                          </div>
                          <p className="text-gray-700">
                            Hola Carlos, las listas por comprensión son una forma concisa de crear listas. Te recomiendo
                            revisar la lección 10 donde lo explico en detalle.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="ml-14">
                      Responder
                    </Button>
                  </div>

                  <div>
                    <div className="flex items-start mb-4">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Usuario"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <p className="font-medium mr-2">Laura Gómez</p>
                          <span className="text-xs text-gray-500">hace 5 días</span>
                        </div>
                        <p className="text-gray-700">
                          ¡Excelente curso! Estoy aprendiendo mucho. ¿Habrá una segunda parte más avanzada?
                        </p>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="ml-14">
                      Responder
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notas">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Mis notas</h3>
                <p className="text-gray-600 mb-6">Toma notas mientras aprendes para revisar más tarde.</p>

                <textarea
                  className="w-full border rounded-lg p-4 min-h-[200px]"
                  placeholder="Escribe tus notas aquí..."
                ></textarea>

                <div className="flex justify-end mt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">Guardar notas</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

