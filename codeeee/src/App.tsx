import type React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { ThemeProvider } from "./contexts/ThemeContext"

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/courses" component={Courses} />
              <Route path="/courses/:id" component={CourseDetail} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

