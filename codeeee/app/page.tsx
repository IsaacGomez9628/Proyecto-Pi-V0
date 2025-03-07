import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Code, Laptop, Moon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">CodeLearn</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/cursos" className="text-gray-600 hover:text-purple-600 transition">
              Cursos
            </Link>
            <Link href="/recursos" className="text-gray-600 hover:text-purple-600 transition">
              Recursos
            </Link>
            <Link href="/comunidad" className="text-gray-600 hover:text-purple-600 transition">
              Comunidad
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition">
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button variant="outline" className="hidden sm:inline-flex">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/registro">
              <Button className="bg-purple-600 hover:bg-purple-700">Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Explora tu creatividad sin miedo</h1>
              <p className="text-lg text-gray-600 mb-8">
                Mejora tus habilidades de programación con nuestra plataforma interactiva. Aprende Python y otros
                lenguajes a tu propio ritmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
                  Comenzar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-lg py-6 px-8">
                  Ver cursos
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
                  <span>+50 cursos</span>
                </div>
                <div className="flex items-center">
                  <Laptop className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Proyectos prácticos</span>
                </div>
                <div className="flex items-center">
                  <Moon className="h-5 w-5 text-purple-600 mr-2" />
                  <span>Modo nocturno</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-purple-100 rounded-lg p-6 relative z-10">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Plataforma de aprendizaje"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-200 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegir nuestra plataforma?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diseñada pensando en las necesidades reales de los estudiantes de programación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Moon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modo Nocturno</h3>
              <p className="text-gray-600">
                Sabemos que prefieres estudiar por la noche, por eso optimizamos nuestra plataforma para sesiones
                nocturnas.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Python Primero</h3>
              <p className="text-gray-600">
                Enfoque especial en Python, el lenguaje más solicitado por nuestros usuarios.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Documentación en Español</h3>
              <p className="text-gray-600">
                Todos nuestros recursos están disponibles en español para eliminar la barrera del idioma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Cursos Populares</h2>
            <Link href="/cursos">
              <Button variant="outline" className="flex items-center">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Python para Principiantes",
                lessons: 24,
                level: "Principiante",
                image: "/placeholder.svg?height=200&width=300",
                color: "bg-blue-100",
              },
              {
                title: "Desarrollo Web con JavaScript",
                lessons: 32,
                level: "Intermedio",
                image: "/placeholder.svg?height=200&width=300",
                color: "bg-yellow-100",
              },
              {
                title: "Ciencia de Datos con Python",
                lessons: 28,
                level: "Avanzado",
                image: "/placeholder.svg?height=200&width=300",
                color: "bg-green-100",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
              >
                <div className={`${course.color} p-4`}>
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{course.lessons} lecciones</span>
                    <span>Nivel: {course.level}</span>
                  </div>
                  <Link href={`/cursos/${index}`}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Ver curso</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Code className="h-6 w-6 text-purple-400" />
                <span className="font-bold text-xl">CodeLearn</span>
              </div>
              <p className="text-gray-400">
                Plataforma de aprendizaje de programación diseñada para estudiantes hispanohablantes.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Enlaces</h4>
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
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacidad" className="text-gray-400 hover:text-white">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-gray-400 hover:text-white">
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">soporte@codelearn.com</li>
                <li className="text-gray-400">+52 123 456 7890</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} CodeLearn. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

