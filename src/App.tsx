import { Slide, ToastContainer } from "react-toastify"
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

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  )
}

export default App