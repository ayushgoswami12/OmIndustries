
import Footer from '../Footer/Footer'
import CustomCursor from './CustomCursor'
import Header from './Headers'
import Hero from './Hero'
import OurProducts from './OurProducts'
import Showcase from './Showcase'
import ContactNew from "../Contact/ContactNew";

// import Services from "./Services"

function Homepage() {
  return (
    <>

    <div className='fpage'>
    <CustomCursor></CustomCursor>
      <Header></Header>
      <Hero></Hero>
    </div>
      {/* <Services></Services> */}
      <OurProducts></OurProducts>
      <Showcase></Showcase>
      <ContactNew />
      <Footer></Footer>
    </>
  )
}

export default Homepage
