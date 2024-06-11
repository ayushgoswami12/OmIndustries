import Tool from "../assets/Icons1/heropreview.png"
import "./Hero.css"
function Hero() {
  return (
    <>
    <div id="mainHero" className="flex pt-5">
      <div id="paragraph" className="flex-col  ">
        <h1 id="division_para" className="font-bold">Welcome to Om Industries</h1>
        <p className=" text-lg  pt-5" id="description">WeDu provides an effective and powerful way to manage your projects</p>
        <button className="border-2 bg-black text-white p-3 rounded-md mt-7 self-center">Contact us Now</button>
      </div>
      <div id="imagediv" className="">
        <img id="selective_img" src={Tool}></img>
      </div>
    </div>
    </>
  )
}

export default Hero
