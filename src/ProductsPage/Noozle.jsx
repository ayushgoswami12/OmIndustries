// import React from 'react'
import "./Products.css"
import Header from "../HomePage/Headers"
import Product16 from "../assets/Product16.jpg"

function Noozle() {
  return (
    <>

      <>
        <Header></Header>
        <div>



          <div className="Divisons">
            <div className="productImg">

              <img src={Product16}></img>
            </div>
            <div>
              <h1 className="text-4xl pt-20">Gooseneck</h1>
              <p>Dimensions = 32 X 32</p>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Noozle
