import { CardServices,CaseStudy,ChooseUs,Footer,Header,NavBar,Rates,Testimonial } from "./components"

function App() {
  return (
    <>
      <div className=' h-[34rem] xtsm:max-sm:h-[45rem] bg-[url("/src/assets/BG-1.png")] bg-no-repeat' >
        <NavBar/>
        <Header/>
      </div>
      <CardServices/>
      <Rates/>
      <ChooseUs/>
      <CaseStudy/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
