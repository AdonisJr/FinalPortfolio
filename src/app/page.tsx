import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";


export default function page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to to-gray-500 text-white">
      <Navbar />
      <div id="home">
          <Home />
      </div>
      <div id="about" className="h-screen">
          <About />
      </div>
    </main>
  )
}
