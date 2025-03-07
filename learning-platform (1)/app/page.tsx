import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BookOpen, Code, Users, Zap, Target } from "lucide-react"
import Link from "next/link"
import type React from "react" // Added import for React

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Domina la Programación con CodeMaster
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprende, practica y domina las habilidades de programación más demandadas en la industria tecnológica
            actual.
          </p>
        </section>

        <section className="mb-16">
          <Card className="bg-secondary/50 backdrop-blur-md border-secondary">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">¿Por qué elegir CodeMaster?</CardTitle>
              <CardDescription>Descubre las ventajas de nuestra plataforma de aprendizaje</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                title="Cursos Actualizados"
                description="Contenido siempre al día con las últimas tecnologías y mejores prácticas."
              />
              <FeatureCard
                icon={<Code className="h-8 w-8 text-primary" />}
                title="Aprendizaje Práctico"
                description="Proyectos reales y ejercicios interactivos para aplicar lo aprendido."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Comunidad Activa"
                description="Conecta con otros estudiantes y expertos para resolver dudas y colaborar."
              />
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explorar Cursos <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Rutas de Aprendizaje Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LearningPathCard
              title="Desarrollo Web Full-Stack"
              description="Domina el front-end y back-end para crear aplicaciones web completas."
              icon={<Zap className="h-6 w-6 text-yellow-400" />}
              courses={5}
              duration="6 meses"
            />
            <LearningPathCard
              title="Ciencia de Datos"
              description="Aprende a analizar y visualizar datos para tomar decisiones informadas."
              icon={<Target className="h-6 w-6 text-green-400" />}
              courses={4}
              duration="5 meses"
            />
            <LearningPathCard
              title="Desarrollo de Apps Móviles"
              description="Crea aplicaciones nativas para iOS y Android con React Native."
              icon={<Zap className="h-6 w-6 text-blue-400" />}
              courses={3}
              duration="4 meses"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function LearningPathCard({
  title,
  description,
  icon,
  courses,
  duration,
}: { title: string; description: string; icon: React.ReactNode; courses: number; duration: string }) {
  return (
    <Card className="bg-secondary/30 backdrop-blur-sm border-secondary hover:bg-secondary/50 transition-colors">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between text-sm">
          <span>{courses} cursos</span>
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Ver Ruta
        </Button>
      </CardFooter>
    </Card>
  )
}

