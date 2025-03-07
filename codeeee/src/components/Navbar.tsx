"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <nav className="bg-purple-600 dark:bg-purple-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          CodeLearn
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/courses" className="hover:text-purple-200">
            Cursos
          </Link>
          <Link to="/login" className="hover:text-purple-200">
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition duration-300"
          >
            Registrarse
          </Link>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-purple-700 transition duration-300">
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

