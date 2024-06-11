// import React from 'react'
import "./Products.css"
import Header from "../HomePage/Headers"
import Product15 from "../assets/Product15.jpg"

function Product1() {
  let dimension1 = 32
  let dimension2 = 20
  return (
    <>

      <>
        <Header></Header>
        <div>



          <div className="Divisons">
            <div className="productImg">

              <img src={Product15}></img>
            </div>
            
            <div>
              <h1 className="text-4xl pt-20">Gooseneck</h1>
              <p>Dimensions = {dimension1} X {dimension2}</p>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Product1
