import BgImg from "../assets/Icons1/bghero1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Newhero.css";

function NewHero() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={BgImg}
        alt="Background Image"
        draggable="false" // Prevent image dragging
      />
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      {/* Text container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-16 md:pt-24 lg:pt-32">
        <h1 className="uppercase font-black text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white">
          SPARE PARTS OF
        </h1>
        <h2 className="uppercase font-black text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
          <span className="text-blue-400">DIE <span className="text-yellow-500">CASTING MACHINE.</span></span> 
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white font-bold mt-4">
          WELCOME TO OM INDUSTRIES 
        </p>
      </div>

      {/* Header */}
      <div className="header absolute top-0 left-0 w-full z-20 ">
        {/* Logo or Title */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="mainHeader flex justify-between items-center px-4 py-4 md:py-6"
        >
          <Link to="/" className="text-white font-bold text-3xl md:text-4xl">
            OM INDUSTRIES
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 0.1 }}
  className="intro flex justify-center px-4 py-2 text-white"
>
  <ul className="flex gap-4 md:gap-7 justify-center">
    <li className="text-base md:text-xl transition-transform duration-300 hover:scale-105">
      <Link to="/" className="hover:underline transition-colors duration-300 hover:text-blue-400">
        Home
      </Link>
    </li>
    <li className="text-base md:text-xl transition-transform duration-300 hover:scale-105">
      <Link to="/Brochure" className="hover:underline transition-colors duration-300 hover:text-blue-400">
        Brochure
      </Link>
    </li>
    <li className="text-base md:text-xl transition-transform duration-300 hover:scale-105">
      <Link to="/Products" className="hover:underline transition-colors duration-300 hover:text-blue-400">
        Products
      </Link>
    </li>
    <li className="text-base md:text-xl transition-transform duration-300 hover:scale-105">
      <Link to="/Contact" className="hover:underline transition-colors duration-300 hover:text-blue-400">
        Contact Us
      </Link>
    </li>
  </ul>
</motion.div>

      </div>
    </div>
  );
}

export default NewHero;
