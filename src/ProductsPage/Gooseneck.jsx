// import React from 'react'
import "./Products.css"
import Header from "../HomePage/Headers"
import Product15 from "../assets/Product15.jpg"
import Services2 from "../HomePage/Services2"

function Product1() {
 
  return (
    <>

      <>
        <Header></Header>
        <div>



          <div className="Divisons1 ">
            <div className="productImg1">

              <img src={Product15}></img>
            </div>
            <div id="gooseneck" className="text-2xl font-bold  pt-40 ">
              <h1 className="text-yellow-600 capitalize ">gooseneck</h1>
            </div>
            
            
          </div>
        </div>
        <div>
          <h1 className="text-red-600 font-bold text-center  text-3xl">View Our Other Products </h1>
        <Services2></Services2>
        </div>
      </>
    </>
  )
}

export default Product1
