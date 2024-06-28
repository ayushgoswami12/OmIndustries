// import React from 'react'
import "./Products.css"
import Footer from "../Footer/Footer"
import Header from "../HomePage/Headers"
import Product1 from "../assets/product1.jpg"
import "./Piston.css"

function Piston() {
    //   let dimension1 = 32
    //   let dimension2 = 30
    return (
        <>

            <>
                <Header></Header>
                <div className="pb-16">



                    <div className="Divisons">
                        <div className="productImg">

                            <img src={Product1}></img>
                        </div>

                        <div className="ProductDetails">
                            <h1 className="text-5xl pt-20   font-bold text-yellow-600">Piston</h1>
                            <p className="text-xl pt-7">Material :- Hot Die</p>
                            <p className="text-xl pt-2">All sizes are in MM</p>
                            <div className="flex ">

                                <div className="border-4 flex flex-col items-center w-[10vw] mt-5 pt-5 border-yellow-600">
                                    <p className="text-2xl border-b-2 ">40 mm</p>
                                    <p className="text-2xl">45 mm</p>
                                    <p className="text-2xl">50 mm</p>
                                    <p className="text-2xl">51 mm</p>
                                    <p className="text-2xl">55 mm</p>
                                </div>
                                <div className="flex flex-col border-4 border-l-0 mt-5 p-5 border-yellow-600 items-center w-[10vw]">

                                    <p className="text-2xl">60 mm</p>
                                    <p className="text-2xl">65 mm</p>
                                    <p className="text-2xl">70 mm</p>
                                    <p className="text-2xl">75 mm</p>
                                    <p className="text-2xl">90 mm</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        </>
    )
}

export default Piston
