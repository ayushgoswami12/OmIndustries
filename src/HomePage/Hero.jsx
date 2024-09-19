
import Tool from "../assets/Icons1/heropreview.png"
// import { Link } from 'react-router-dom';
import "./Hero.css"
import { motion } from 'framer-motion';
// import Wp from "../assets/Icons1/whatsapp.png"






function Hero() {
  return (
    <>
      <div id="mainHero" className="flex pt-24">
        <motion.div id="paragraph" className="flex-col flex">
        <div className="heros">
  <h1 id="division_para" className="uppercase font-black text-7xl leading-none tracking-tight">WELCOME TO </h1>
  <h1 id="division_para" className="uppercase font-black text-7xl leading-none tracking-tight">Our website</h1>
  <h2 id="division_para" className="uppercase font-black text-7xl leading-none tracking-tight ">
    <span className="text-blue-700">OM <span className="text-blue-700 space-x-2">INDUSTRIES</span></span>.  
  </h2>
  <p className="text-lg text-black font-bolder" id="description">
    WeDu provides an effective and powerful way to manage your projects
  </p>
</div>

          <br />

          {/* <div className="flex flex-row space-x-4 mt-7">
            

            <button className="button"> <Link to="/contact" >
              Email us 
            </Link></button>

            <a
              className=" border-2 bg-orange-600 font-black text-white p-3 rounded-md hover:bg-pink-600 flex items-center justify-center"
              href="https://drive.google.com/file/d/14ody9ceupvMxjyKFD3jRjcqZaJc7ytv-/view?usp=drive_link"
              target="_blank"
              style={{ minHeight: '56px' }}
            >
              Download Our Brochure
            </a>

            <a href="https://wa.me/919512910010" target="_blank" className="flex items-center justify-center" style={{ minHeight: '56px' }}>
              <div className="flex items-center space-x-2 bg-green-600 p-3 rounded-md hover:bg-green-700">
                <img className="w-5 h-5" src={Wp} alt="WhatsApp" />
                <h3 className="text-white font-bold">Chat with us</h3>
              </div>
            </a>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          id="imagediv"
        >
          <img id="selective_img" src={Tool} alt="Tool" />
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
