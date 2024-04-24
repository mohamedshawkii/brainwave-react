import { CardServices,CaseStudy,ChooseUs,Footer,Header,NavBar,Rates,Testimonial } from "./components"

function App() {
  return (
    <>
    <div className="app">
      <NavBar/>
      <Header/>
      <CardServices/>
      <Rates/>
      <ChooseUs/>
      <CaseStudy/>
      <Testimonial/>
      <Footer/>
      </div>
    </>
  )
}

export default App
