import type React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Explora tu creatividad sin miedo</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Mejora tus habilidades de programación y aprende a crear aplicaciones móviles increíbles con nuestros cursos
          interactivos.
        </p>
        <Link
          to="/courses"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Comenzar Ahora
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir CodeLearn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Aprendizaje Interactivo</h3>
            <p>Practica con ejercicios en tiempo real y recibe retroalimentación instantánea.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Enfoque en Python</h3>
            <p>Domina uno de los lenguajes de programación más demandados en la industria.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Comunidad de Apoyo</h3>
            <p>Conecta con otros estudiantes y mentores para resolver dudas y compartir conocimientos.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Cursos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: 1, title: "Python para Principiantes", level: "Básico" },
            { id: 2, title: "Desarrollo Web con Django", level: "Intermedio" },
            { id: 3, title: "Machine Learning con Python", level: "Avanzado" },
          ].map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Nivel: {course.level}</p>
              <Link to={`/courses/${course.id}`} className="text-purple-600 hover:text-purple-700 font-medium">
                Ver detalles →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

