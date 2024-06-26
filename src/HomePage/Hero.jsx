
import Tool from "../assets/Icons1/heropreview.png"

import "./Hero.css"
import { motion } from 'framer-motion';




function Hero() {



  return (
    <>
      <div id="mainHero" className="flex pt-24 ">
        <motion.div

          id="paragraph" className="flex-col flex  ">
          <div className="heros">

            <h1 id="division_para" className=" uppercase font-black text-7xl leading-none tracking-tight  ">WELCOME TO </h1>
            <h1 id="division_para" className=" uppercase font-black text-7xl leading-none tracking-tight "> Our website </h1>
            <h2 id="division_para" className="uppercase font-black text-7xl leading-none tracking-tight text-orange-500">OM INDUSTRIES. </h2>
         
          <p className=" text-lg  " id="description">WeDu provides an effective and powerful way to manage your projects</p>
          </div>
        
          <button className="border-2 bg-black text-white p-3 rounded-md mt-7 self-center">Contact us Now</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          id="imagediv" className="">
          <img id="selective_img" src={Tool}></img>
        </motion.div>
      </div>
    </>
  )
}

export default Hero
