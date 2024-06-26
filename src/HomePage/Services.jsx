import "./Services.css"
import gsap from "gsap";
import { motion } from 'framer-motion';
import Product1 from "../assets/product1.jpg"
import Product2 from "../assets/product2.jpg"
import Product3 from "../assets/product3.jpg"
import Product4 from "../assets/product4.jpg"
import Product5 from "../assets/product5.jpg"
import Product11 from "../assets/Prodcut11.jpg"
// import Product7 from "../assets/product7.jpg"
import Product8 from "../assets/product8.jpg"
import Product9 from "../assets/product9.jpg"
import Product10 from "../assets/Product10.jpg"
import Product13 from "../assets/Product13.jpg"
import Product14 from "../assets/Product14.jpg"
import Product15 from "../assets/Product15.jpg"
import Product16 from "../assets/Product16.jpg"
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";















function ServicesProp (propshere){
   useGSAP(()=>{
      gsap.to(".ServicePageHeading",{
         x:100,
         scrollTrigger:{
            trigger : ".ServicePageHeading",
           start:"bottom",
          end:"top 20%" , 
          scrub: true , 
         }
      })
   })



return(
    <>
         <Link to={`/product/${propshere.id.replace(/\s+/g, '-')}`}>
    <img id="product_img" src={propshere.img}></img>
    <h1 id="headingprops" className="propteries">{propshere.heading}</h1>
    <h2 className="propteries1">{propshere.description}</h2>
</Link>
     
    </>
)
}

function Services() {
   
  return (
    <>
<motion.div
whileHover={{ backgroundColor: '#9aa9b9e5' , backgroundPosition: 'right bottom' }}

transition={{ duration: 0.5, ease: 'easeInOut' }}
 className="mainService">

    <div className="ServicePageHeading">
      <h1>Our Products </h1>
      <h2 id="requirement">Click for Service Requirement Below</h2>
    </div>

    <div className="ProvidedServices">


    

   
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
    className="ServiceDetail border-2">
    <ServicesProp 

   

     img = {Product15}
     id="Gooseneck"
    heading = "Gooseneck"
    // description = "This is me here"
    button = "Click"
    />
    </motion.div>



    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2 ">


    <ServicesProp 
    img =  {Product1}
    heading = "Piston" 
    id="Piston"
    // description = "This is me here "
    />
    </motion.div>
   


    <motion.div
    initial={{ opacity: 0, y: -10 }}
    transition={{ duration: 1.5, delay: 0.1 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="ServiceDetail border-2">
    <ServicesProp 
        img={Product14}
        heading="Nozzle Socket" 
        id="Nozzle-Socket" // Replacing spaces with hyphens
        // description="This is me here"
    />
</motion.div>

    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product16}
    heading = " Nozzle " 
    id="Nozzle"
    // description = "This is me here "
    />
    </motion.div>




    <motion.div initial={{ opacity: 0,  }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
         className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product2}
    heading = "Ring"
    id = "Ring"
    // description = "This is me here "
    />
    </motion.div>









    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product3}
    heading = "C Clamp  " 
    id = "CClamp  " 
    // description = "  Unlimited creativity: Generative AI is a great brainstorming tool. You can try new ideas and concepts faster than ever, so you can explore your wildest ideas "
    />
    </motion.div>







    <motion.div
     initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product4}
    heading = "Clamp " 
    id = "Clamp " 
    // description = "imply press "
    />
    </motion.div>







    
    <motion.div
     initial={{ opacity: 0, }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product5}
    heading="Heater Sensor "
    id="Heater Sensor "
    // description = "This is me here "
    />
    </motion.div>









    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">


    <ServicesProp 
    img =  {Product11}
    heading = " Rotlo Heater  " 
    id = " Rotlo Heater  " 
    // description = "This is me here "
    />
    </motion.div>
    
    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">


    <ServicesProp 
    img =  {Product9}
    heading = " Center Pin  " 
    id = " Center Pin  " 
    // description = "This is me here "
    />
    </motion.div>


    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">


    <ServicesProp 
    img =  {Product10}
    heading = " Pin  " 
    id = " Pin  " 
    // description = "This is me here "
    />
    </motion.div>




    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product8}
    heading = " Heater  " 
    id = " Heater  " 
    // description = "This is me here "
    />
    </motion.div>



    <motion.div
     initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product13}
    heading = " Studs  " 
    id = " Studs  " 
    // description = "This is me here "
    />
    </motion.div>


    
  
   
    </div>
</motion.div>
    </>
  )
}

export default Services
