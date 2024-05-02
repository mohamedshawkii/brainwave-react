import {
  CardServices,
  CaseStudy,
  ChooseUs,
  Footer,
  Header,
  NavBar,
  Rates,
  Testimonial,
} from "./components";

function App() {
  return (
    <>
      <div className='h-[34rem] bg-[url("/src/assets/BG-1.png")]'>
        <NavBar />
        <Header />
      </div>
      <CardServices />
      <Rates />
      <ChooseUs />
      <CaseStudy />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
