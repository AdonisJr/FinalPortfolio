import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";


export default function page() {
  return (
    <main className="min-h-screen bg-gradient-to-br gap-5 from-gray-500 to to-black text-white">
      <Navbar />
      <div id="home min-h-screen">
          <Home />
      </div>
      <div id="about" className="flex items-center min-h-screen">
          <About />
      </div>
      <div id="projects" className="flex items-center p-5 min-h-screen">
          <Projects />
      </div>

    </main>
  )
}
