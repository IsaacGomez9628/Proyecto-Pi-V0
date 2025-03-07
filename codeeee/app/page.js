import Link from "next/link"
import { LucideCode, LucideBookOpen, LucideUsers, LucideChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LucideCode className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl text-indigo-600">CodeLearn</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/cursos" className="text-gray-600 hover:text-indigo-600">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Explora tu creatividad sin miedo</h1>
            <p className="text-xl text-gray-600 mb-8">
              Aprende a programar con cursos interactivos diseñados para principiantes y profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cursos"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-center"
              >
                Explorar Cursos
              </Link>
              <Link
                href="/registro"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 text-center"
              >
                Registrarse Gratis
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Programación creativa"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir nuestra plataforma?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <LucideCode className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cursos Interactivos</h3>
              <p className="text-gray-600">
                Aprende con ejercicios prácticos y proyectos reales que refuerzan tus conocimientos.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <LucideBookOpen className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentación en Español</h3>
              <p className="text-gray-600">
                Todos nuestros recursos están disponibles en español para facilitar tu aprendizaje.
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <LucideUsers className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
              <p className="text-gray-600">
                Conecta con otros estudiantes y mentores para resolver dudas y compartir conocimientos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Cursos Populares</h2>
          <Link href="/cursos" className="text-indigo-600 flex items-center hover:underline">
            Ver todos <LucideChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Python para Principiantes",
              description: "Aprende los fundamentos de Python, el lenguaje más solicitado.",
              level: "Principiante",
              duration: "8 semanas",
            },
            {
              title: "Desarrollo Web Frontend",
              description: "Domina HTML, CSS y JavaScript para crear sitios web interactivos.",
              level: "Intermedio",
              duration: "10 semanas",
            },
            {
              title: "Ciencia de Datos con Python",
              description: "Análisis de datos, visualización y machine learning básico.",
              level: "Avanzado",
              duration: "12 semanas",
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`/placeholder.svg?height=200&width=400&text=${course.title}`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Nivel: {course.level}</span>
                  <span>Duración: {course.duration}</span>
                </div>
                <Link
                  href={`/cursos/${index}`}
                  className="block text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Ver Curso
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

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

