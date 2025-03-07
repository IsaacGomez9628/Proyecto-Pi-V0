import Link from "next/link"
import { LucideCode, LucidePlay, LucideBook, LucideDownload, LucideUsers, LucideClock, LucideAward } from "lucide-react"

export default function CursoDetalle({ params }) {
  const courseId = params.id

  // Simulación de datos del curso
  const course = {
    id: courseId,
    title: "Python para Principiantes",
    description:
      "Aprende los fundamentos de Python, el lenguaje más solicitado en el mercado laboral. Este curso te llevará desde los conceptos básicos hasta la creación de aplicaciones reales.",
    longDescription:
      "Python es uno de los lenguajes de programación más populares y versátiles en la actualidad. Es utilizado en desarrollo web, ciencia de datos, inteligencia artificial, automatización y muchas otras áreas. Este curso está diseñado para principiantes absolutos, no se requiere experiencia previa en programación. Aprenderás desde los conceptos fundamentales como variables, tipos de datos y estructuras de control, hasta temas más avanzados como funciones, módulos y programación orientada a objetos.",
    level: "Principiante",
    duration: "8 semanas",
    category: "Programación",
    rating: 4.8,
    students: 1245,
    instructor: "María González",
    instructorRole: "Desarrolladora Senior Python",
    instructorImage: "/placeholder.svg?height=100&width=100",
    price: 29.99,
    modules: [
      {
        title: "Introducción a Python",
        lessons: [
          "¿Qué es Python y por qué aprenderlo?",
          "Instalación y configuración del entorno",
          "Tu primer programa en Python",
          "Uso de la consola interactiva",
        ],
      },
      {
        title: "Fundamentos de Python",
        lessons: [
          "Variables y tipos de datos",
          "Operadores aritméticos y lógicos",
          "Estructuras de control: if, else, elif",
          "Bucles: for y while",
        ],
      },
      {
        title: "Estructuras de Datos",
        lessons: [
          "Listas y operaciones con listas",
          "Tuplas y sus características",
          "Diccionarios y conjuntos",
          "Comprensión de listas",
        ],
      },
      {
        title: "Funciones y Módulos",
        lessons: [
          "Definición y llamada de funciones",
          "Parámetros y argumentos",
          "Funciones lambda",
          "Creación y uso de módulos",
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <LucideCode className="h-6 w-6 text-indigo-600" />
              <span className="font-bold text-xl text-indigo-600">CodeLearn</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/cursos" className="text-indigo-600 font-medium">
              Cursos
            </Link>
            <Link href="/recursos" className="text-gray-600 hover:text-indigo-600">
              Recursos
            </Link>
            <Link href="/comunidad" className="text-gray-600 hover:text-indigo-600">
              Comunidad
            </Link>
            <Link href="/login" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Course Header */}
      <header className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <div className="flex items-center text-indigo-200 mb-4">
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
                <span className="mx-2">/</span>
                <Link href="/cursos" className="hover:text-white">
                  Cursos
                </Link>
                <span className="mx-2">/</span>
                <span>{course.title}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <LucideUsers className="h-5 w-5 mr-2" />
                  <span>{course.students} estudiantes</span>
                </div>
                <div className="flex items-center">
                  <LucideClock className="h-5 w-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <LucideAward className="h-5 w-5 mr-2" />
                  <span>Nivel: {course.level}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-300 mr-2">
                    {"★".repeat(Math.floor(course.rating))}
                    {"☆".repeat(5 - Math.floor(course.rating))}
                  </div>
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={course.instructorImage || "/placeholder.svg"}
                  alt={course.instructor}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-indigo-200 text-sm">{course.instructorRole}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-gray-800">
              <div className="relative mb-4">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=${course.title}`}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md"
                  className="w-full h-48 object-cover rounded-md"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                  <LucidePlay className="h-16 w-16 text-white" />
                </button>
              </div>
              <p className="text-2xl font-bold mb-4">${course.price}</p>
              <button className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 mb-3">
                Inscribirse Ahora
              </button>
              <button className="w-full py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 mb-6">
                Prueba Gratuita
              </button>
              <div className="space-y-4">
                <div className="flex items-center">
                  <LucideBook className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Acceso a todos los materiales</span>
                </div>
                <div className="flex items-center">
                  <LucideDownload className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Recursos descargables</span>
                </div>
                <div className="flex items-center">
                  <LucideUsers className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Foro de estudiantes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Acerca de este curso</h2>
              <p className="text-gray-700 mb-6">{course.longDescription}</p>
              <h3 className="text-xl font-semibold mb-3">Lo que aprenderás</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Fundamentos de programación en Python</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Estructuras de datos y algoritmos básicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Programación orientada a objetos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Desarrollo de aplicaciones reales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Buenas prácticas de programación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Resolución de problemas comunes</span>
                </li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">Requisitos</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                <li>No se requiere experiencia previa en programación</li>
                <li>Computadora con acceso a internet</li>
                <li>Deseos de aprender y practicar</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Contenido del curso</h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div key={index} className="border rounded-md overflow-hidden">
                    <div className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer">
                      <h3 className="font-semibold">
                        Módulo {index + 1}: {module.title}
                      </h3>
                      <span className="text-sm text-gray-500">{module.lessons.length} lecciones</span>
                    </div>
                    <div className="p-4 space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center p-2 hover:bg-gray-50 rounded">
                          <LucidePlay className="h-4 w-4 text-indigo-600 mr-3" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Instructor</h2>
              <div className="flex items-center mb-4">
                <img
                  src={course.instructorImage || "/placeholder.svg"}
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{course.instructor}</h3>
                  <p className="text-gray-600">{course.instructorRole}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Desarrolladora con más de 8 años de experiencia en Python. Ha trabajado en proyectos de análisis de
                datos, desarrollo web y automatización para empresas de tecnología líderes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>Calificación instructor: 4.9</span>
                </div>
                <div className="flex items-center">
                  <LucideUsers className="h-4 w-4 text-gray-600 mr-2" />
                  <span>12,345 estudiantes</span>
                </div>
                <div className="flex items-center">
                  <LucideBook className="h-4 w-4 text-gray-600 mr-2" />
                  <span>8 cursos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <LucideCode className="h-6 w-6 text-indigo-400" />
                <span className="font-bold text-xl text-white">CodeLearn</span>
              </div>
              <p className="text-gray-400">
                Plataforma de aprendizaje de programación diseñada para todos los niveles.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/cursos" className="text-gray-400 hover:text-white">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="/recursos" className="text-gray-400 hover:text-white">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="/comunidad" className="text-gray-400 hover:text-white">
                    Comunidad
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="text-gray-400 hover:text-white">
                    Sobre Nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/ayuda" className="text-gray-400 hover:text-white">
                    Centro de Ayuda
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suscríbete</h4>
              <p className="text-gray-400 mb-4">Recibe las últimas actualizaciones y ofertas</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700">Enviar</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CodeLearn. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

