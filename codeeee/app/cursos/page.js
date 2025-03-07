import Link from "next/link"
import { LucideCode, LucideSearch, LucideFilter, LucideChevronDown } from "lucide-react"

export default function Cursos() {
  const courses = [
    {
      id: 1,
      title: "Python para Principiantes",
      description: "Aprende los fundamentos de Python, el lenguaje más solicitado.",
      level: "Principiante",
      duration: "8 semanas",
      category: "Programación",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Desarrollo Web Frontend",
      description: "Domina HTML, CSS y JavaScript para crear sitios web interactivos.",
      level: "Intermedio",
      duration: "10 semanas",
      category: "Desarrollo Web",
      rating: 4.6,
    },
    {
      id: 3,
      title: "Ciencia de Datos con Python",
      description: "Análisis de datos, visualización y machine learning básico.",
      level: "Avanzado",
      duration: "12 semanas",
      category: "Ciencia de Datos",
      rating: 4.9,
    },
    {
      id: 4,
      title: "JavaScript Moderno",
      description: "Aprende ES6+, async/await, y las últimas características de JavaScript.",
      level: "Intermedio",
      duration: "8 semanas",
      category: "Desarrollo Web",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Desarrollo de Apps Móviles",
      description: "Crea aplicaciones móviles para iOS y Android con React Native.",
      level: "Intermedio",
      duration: "10 semanas",
      category: "Desarrollo Móvil",
      rating: 4.5,
    },
    {
      id: 6,
      title: "Bases de Datos SQL",
      description: "Diseño, consultas y optimización de bases de datos relacionales.",
      level: "Principiante",
      duration: "6 semanas",
      category: "Bases de Datos",
      rating: 4.4,
    },
  ]

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

      {/* Header */}
      <header className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Explora Nuestros Cursos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Descubre una amplia variedad de cursos diseñados para ayudarte a dominar nuevas habilidades de programación.
          </p>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-16 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <LucideSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <button className="flex items-center px-4 py-2 border rounded-md bg-white">
                  <LucideFilter className="h-4 w-4 mr-2" />
                  Categoría
                  <LucideChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center px-4 py-2 border rounded-md bg-white">
                  <LucideFilter className="h-4 w-4 mr-2" />
                  Nivel
                  <LucideChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center px-4 py-2 border rounded-md bg-white">
                  <LucideFilter className="h-4 w-4 mr-2" />
                  Duración
                  <LucideChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Listing */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Todos los Cursos ({courses.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={`/placeholder.svg?height=200&width=400&text=${course.title}`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Nivel: {course.level}</span>
                  <span>Duración: {course.duration}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(Math.floor(course.rating))}
                    {"☆".repeat(5 - Math.floor(course.rating))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{course.rating.toFixed(1)}</span>
                </div>
                <Link
                  href={`/cursos/${course.id}`}
                  className="block text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-md bg-white">Anterior</button>
          <button className="px-4 py-2 border rounded-md bg-indigo-600 text-white">1</button>
          <button className="px-4 py-2 border rounded-md bg-white">2</button>
          <button className="px-4 py-2 border rounded-md bg-white">3</button>
          <button className="px-4 py-2 border rounded-md bg-white">Siguiente</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
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

