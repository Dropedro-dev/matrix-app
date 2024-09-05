import { Features, Hero, NavBar, Pricing, Testimonials, Footer, MatrixRainingCode } from "./components"


const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRainingCode className="absolute inset-0"/>
      <div className="flex flex-col">
        <NavBar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>

    </div>
  )
}

export default App
