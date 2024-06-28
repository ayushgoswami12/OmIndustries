import "./Services.css"


import Product1 from "../assets/product1.jpg"
import Product2 from "../assets/product2.jpg"
import Product3 from "../assets/product3.jpg"
import Product4 from "../assets/product4.jpg"
import Product5 from "../assets/product5.jpg"
import Product18 from "../assets/product18.jpg"
import Product19 from "../assets/product19.jpg"
import Product20 from "../assets/product20.jpg"
import Product21 from "../assets/product21.jpg"
import Hook from "../assets/Hook.jpg"

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
















function ServicesProp (propshere){
  



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
<div

 className="mainService">

    <div className="ServicePageHeading">
      <h1>Our Products </h1>
      <h2 id="requirement">Click for Service Requirement Below</h2>
    </div>

    <div className="ProvidedServices">


    

   
    <div 
      
    className="ServiceDetail border-2">
    <ServicesProp 

   

     img = {Product15}
     id="Gooseneck"
    heading = "Gooseneck"
    // description = "This is me here"
    button = "Click"
    />
    </div>



    <div
     
     className="ServiceDetail border-2 ">


    <ServicesProp 
    img =  {Product1}
    heading = "Plunger Piston with Ring " 
    id="Piston"
    // description = "This is me here "
    />
    </div>
   


    <div
    
    className="ServiceDetail border-2">
    <ServicesProp 
        img={Product14}
        heading="Nozzle Socket" 
        id="Nozzle-Socket" // Replacing spaces with hyphens
        // description="This is me here"
    />
</div>

    <div
     
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product16}
    heading = " Nozzle Tip With Thread  " 
    id="Nozzle"
    // description = "This is me here "
    />
    </div>




    <div 
         className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product2}
    heading = "Ring"
    id = "Ring"
    // description = "This is me here "
    />
    </div>









    <div
    
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product3}
    heading = "C Shaped Clamp  " 
    id = "CClamp  " 
    // description = "  Unlimited creativity: Generative AI is a great brainstorming tool. You can try new ideas and concepts faster than ever, so you can explore your wildest ideas "
    />
    </div>







    <div
    
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product4}
    heading = "Clamp " 
    id = "Clamp " 
    // description = "imply press "
    />
    </div>







    
    <div
    
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product5}
    heading="ThermoCouple   "
    id="ThermoCouple "
    // description = "This is me here "
    />
    </div>









    <div
    
     className="ServiceDetail border-2">


    <ServicesProp 
    img =  {Product11}
    heading = " Gooseneck Heater   " 
    id = " Gooseneck Heater  " 
    // description = "This is me here "
    />
    </div>
    
    <div
     
     className="ServiceDetail border-2">


    <ServicesProp 
    img =  {Product9}
    heading = " Center Pin  " 
    id = " Center Pin  " 
    // description = "This is me here "
    />
    </div>


    <div

     className="ServiceDetail border-2">


    <ServicesProp 
    img =  {Product10}
    heading = " Ejector Pin  " 
    id = " Ejector Pin  " 
    // description = "This is me here "
    />
    </div>




    <div
     
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product8}
    heading = " Nozzle Heater  " 
    id = " Nozzle Heater  " 
    // description = "This is me here "
    />
    </div>



    <div
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product13}
    heading = " Studs  " 
    id = " Studs  " 
    // description = "This is me here "
    />
    </div>




    
    <div
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product18}
    heading = " Flat Clamp  " 
    id = " Flat Clamp  " 
    // description = "This is me here "
    />
    </div>

    <div
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product19}
    heading = " Automatic spray gun   " 
    id = " Automatic spray gun  " 
    // description = "This is me here "
    />
    </div>
    <div
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product20}
    heading = " Nipple   " 
    id = " Nipple  " 
    // description = "This is me here "
    />
    </div>
    <div
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Product21}
    heading = " Pencil Heater   " 
    id = " Studs  " 
    // description = "This is me here "
    />
    </div>
    <div
     className="ServiceDetail border-2">
    <ServicesProp 
    img =  {Hook}
    heading = " Hook  " 
    id = " Hook  " 
    // description = "This is me here "
    />
    </div>


    
  
   
    </div>
</div>
    </>
  )
}

export default Services
