"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

interface Course {
  id: number
  title: string
  level: string
  category: string
}

const allCourses: Course[] = [
  { id: 1, title: "Introducción a Python", level: "Principiante", category: "Python" },
  { id: 2, title: "Python Intermedio", level: "Intermedio", category: "Python" },
  { id: 3, title: "Python Avanzado", level: "Avanzado", category: "Python" },
  { id: 4, title: "Desarrollo Web con Django", level: "Intermedio", category: "Web" },
  { id: 5, title: "Machine Learning con Python", level: "Avanzado", category: "Data Science" },
  { id: 6, title: "Automatización con Python", level: "Intermedio", category: "Automation" },
]

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedLevel, setSelectedLevel] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const filteredCourses = allCourses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === "" || course.level === selectedLevel) &&
      (selectedCategory === "" || course.category === selectedCategory),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Explora Nuestros Cursos</h2>

      <div className="mb-8 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Buscar cursos..."
          className="px-4 py-2 border rounded-lg flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-lg"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">Todos los niveles</option>
          <option value="Principiante">Principiante</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>
        <select
          className="px-4 py-2 border rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Python">Python</option>
          <option value="Web">Web</option>
          <option value="Data Science">Data Science</option>
          <option value="Automation">Automatización</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Nivel: {course.level}</p>
            <p className="text-gray-600 dark:text-gray-400">Categoría: {course.category}</p>
          </Link>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          No se encontraron cursos que coincidan con tu búsqueda.
        </p>
      )}
    </div>
  )
}

export default Courses

