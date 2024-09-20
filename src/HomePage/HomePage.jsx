
import Footer from '../Footer/Footer'
// import CustomCursor from './CustomCursor'
// import Header from './Headers'
// import Hero from './Hero'
import OurProducts from './OurProducts'
import Showcase from './Showcase'
  import ContactNew from "../Contact/ContactNew";
import NewHero from './NewHero'

// import Services from "./Services"

function Homepage() {
  return (
    <>

    <div className='fpage  '>
    {/* <CustomCursor></CustomCursor> */}
      {/* <Header></Header> */}
      <NewHero></NewHero>
      {/* <Hero></Hero> */}
      {/* <Services></Services> */}
      <div> 

      <Showcase></Showcase>
      <OurProducts></OurProducts>
      <ContactNew />
      <Footer></Footer>
      </div>
    </div>
    </>
  )
}

export default Homepage
