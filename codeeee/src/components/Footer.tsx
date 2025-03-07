import type React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CodeLearn</h3>
            <p className="text-gray-400">Aprende programación de manera interactiva y divertida.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="hover:text-purple-400">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400">
                Facebook
              </a>
              <a href="#" className="hover:text-purple-400">
                Twitter
              </a>
              <a href="#" className="hover:text-purple-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CodeLearn. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

