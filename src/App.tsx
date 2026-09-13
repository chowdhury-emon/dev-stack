import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Technologies from "./components/Technologies/Technologies"

function App() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <Technologies />
      </main>
      <Footer />
    </div>
  )
}

export default App