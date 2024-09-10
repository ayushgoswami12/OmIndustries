// import React from 'react'
import Downlaod from "../assets/Icons1/download.svg"
import Header from "../HomePage/Headers"
import Wp from "../assets/Icons1/whatsapp.png"
import { motion } from 'framer-motion';

import Book from "../assets/Icons1/tool.svg"
import "./brochure.css"
import CustomCursor from "../HomePage/CustomCursor";






function Brochure() {
  return (
    <>
    <CustomCursor></CustomCursor>
      <Header></Header>
      <div id="brochureMain" className=" flex ">

        <div id="brochureMain" className="flex items-center justify-center pt-10 flex-col">
          <motion.div
          initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
          >
         
            <h1 className="text-4xl underline text-red-600 font-bold py-3 my-3 ">Our Brochure  </h1>
            <div id="downloadbutton" className=" py-3 my-3 flex flex-row items-center justify-center rounded-lg hover:cursor-pointer bg-yellow-400">

              <a className="flex" target="blank" href="https://drive.google.com/file/d/14ody9ceupvMxjyKFD3jRjcqZaJc7ytv-/view?usp=drive_link">
                <img className="w-10" src={Downlaod}></img>

                <h1 className="text-3xl ">Download Our Brochure</h1>
              </a>
            </div>
            <div>

              <a className=" text-2xl " href="https://wa.me/919512910010" target="_blank">
                <div className="flex bg-green-400 p-2">
                  <img className="w-10" src={Wp}></img>

                  <h1 className="text-3xl  pl-4">   Chat with us on WhatsApp</h1>

                </div>
              </a>
            </div>

          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
         className="brochureimg">
          <img src={Book}></img>
        </motion.div>
      </div>
    </>
  )
}

export default Brochure
