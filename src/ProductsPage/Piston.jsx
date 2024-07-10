// import React from 'react'
import "./Products.css"
import Footer from "../Footer/Footer"
import Header from "../HomePage/Headers"
import Product1 from "../assets/straightpic/plungerpiston.jpg"
import "./Piston.css"

function Piston() {
    //   let dimension1 = 32
    //   let dimension2 = 30
    return (
        <>

            <>
                <Header></Header>
                <div className="pb-16">



                    <div className="Divisons1">
                        <div className="productImg1">

                            <img src={Product1}></img>
                        </div>

                       
                    </div>
                </div>
                <Footer></Footer>
            </>
        </>
    )
}

export default Piston
