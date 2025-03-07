import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Code } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-purple-600">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Volver al inicio</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">CodeLearn</span>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Crear una cuenta</h1>
              <p className="text-gray-600">Únete a nuestra comunidad de aprendizaje</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Tu apellido" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
                <p className="text-xs text-gray-500">La contraseña debe tener al menos 8 caracteres</p>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  Acepto los{" "}
                  <Link href="/terminos" className="text-purple-600 hover:underline">
                    Términos de servicio
                  </Link>{" "}
                  y la{" "}
                  <Link href="/privacidad" className="text-purple-600 hover:underline">
                    Política de privacidad
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Crear cuenta
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">O regístrate con</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <img src="/placeholder.svg?height=20&width=20" alt="Google" className="w-5 h-5 mr-2" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <img src="/placeholder.svg?height=20&width=20" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-purple-600 hover:underline font-medium">
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

