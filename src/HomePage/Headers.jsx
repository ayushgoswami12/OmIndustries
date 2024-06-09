// Header.jsx
// import React from 'react'; 

import Mail from "../assets/Icons1/mail.svg"

import Call from "../assets/Icons1/contact.svg"
import Logo from '../assets/LOGOMAIN1.png';
import './Headers.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import Services from "./Services";

function Header() {
  return (
    <>

    <div className="header">
      <motion.div
       initial={{ opacity: 0, x: -10 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mainHeader"
      >
      <Link to="/">

       <img src={Logo} alt="Logo" />
      </Link>
      
      </motion.div>

      <motion.div
 initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="intro"
      >
       <ul className='ul'>
        <li>Home</li>
        <li>   <Link to={"/Product"}>Product</Link>  </li>
        <li>Contact us </li>
        {/* <li>Hello</li> */}
       </ul>
      </motion.div>
    </div>
    <div className='contactIcons py-2'>
    <div className="mail">
    <img id="svgs"  src={Mail}></img>
    <p className="font-bold">omindustries3639@gmail.com</p>
    </div>
    <div className="call">
    <img id="svgs" src={Call}></img>
    <p className="font-bold">9512910010</p>
    </div>
      </div>
      <div>
        {/* <img src={Tool}></img> */}
      </div>
    
    
    </>
  );
}

export default Header;
