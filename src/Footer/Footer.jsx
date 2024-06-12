// import React from 'react'
import "./Footer.css"
import InstaLogo from "./Instagram.svg"
import WhatLogo from "./Whatsapp.svg"

function Footer() {
  return (
    <>
<div className="bg-black text-white p-4">
<footer className="flex gap-5">

    <div id="division" >
   <h1 className="text-3xl underline py-3">Address</h1> 
   <h1 className="text-xl">Om Industries , near </h1> 
   <h1 className="text-xl">Rajkot</h1> 
   <h1 className="text-xl">Mail : omindustries3639@gmail.com</h1> 
   <h1 className="text-xl">Phone : 9512910010</h1> 


    </div>
    <div >
   <h1 className="text-3xl underline " >Social Media Platforms </h1> 
   <div className="flex m-3 gap-5">

    <img className="hover:cursor-pointer" src={InstaLogo}></img>
    <img className="hover:cursor-pointer" src={WhatLogo}></img>
   </div>
    
  

    </div>
    
</footer>
</div>
    </>
  )
}

export default Footer
