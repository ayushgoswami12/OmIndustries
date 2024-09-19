import { useEffect } from "react";
import PlugPiston from "../assets/straightpic/plungerpiston.png";
import NozleTip from "../assets/nozzletip.png";
import NozzleHeater1 from "../assets/NozzleHeater1.png";
import NozzleHeater2 from "../assets/NozzleHeater2.png";
import "./OurProducts.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


import WhatsappIntegrate from "./WhatsappIntegrate";

function OurProducts() {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        };

        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(animateCursor);
        };

        window.addEventListener("mousemove", moveCursor);
        animateCursor();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            {/* Custom Cursor */}
            <div className="custom-cursor fixed w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>

            <div>
                <motion.h1
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="productHeading text-6xl font-bold text-center m-5 py-2 uppercase bg-black text-white">
                    Our <span className="text-orange-500">New</span> Products
                </motion.h1>

                {/* Product Sections */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-2 m-2 mx-5 border-2 border-neutral-700">
                    <h3 className="text-center text-4xl font-bold bg-gray-900 text-white">Piston</h3>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center justify-center mt-8 space-y-8">


                        <div className="flex flex-row items-center justify-center space-x-8">
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    className="w-[15vw] h-auto object-contain transform transition-transform duration-300 hover:scale-110"
                                    src={PlugPiston}
                                    alt="Plug Piston"
                                />
                            </div>
                            <div className="w-[20vw]">
                                <h3 className="font-bold text-2xl">Application : Zinc Dye Casting </h3>
                                <table className="border-collapse border border-gray-500 text-xl w-full h-full">
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">30T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">130T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">40T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">200T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">50T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">160T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">88T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">100T</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-2 mx-5 m-2 border-2 border-neutral-700">
                    <h3 className="text-center text-4xl font-bold bg-gray-900 text-white">Nozzle Heater</h3>
                    <div className="flex flex-col items-center justify-center mt-8 space-y-8">
                        <div className="flex flex-row items-center justify-center space-x-8">
                            <div className="flex flex-row items-center space-y-4">
                                <img
                                    className="w-[15vw] h-auto object-contain transform transition-transform duration-300 hover:scale-105"
                                    src={NozzleHeater1}
                                    alt="Nozzle Heater"
                                />
                                <img
                                    className="w-[15vw] h-auto object-contain transform transition-transform duration-300 hover:scale-110"
                                    src={NozzleHeater2}
                                    alt="Nozzle Heater"
                                />
                            </div>
                            <div className="w-[20vw]">
                                <h3 className="font-bold text-2xl">Application : Zinc Dye Casting </h3>
                                <table className="border-collapse border border-gray-500 text-xl w-full h-full">
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">All Sizes in mm </td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">35 X 110 </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">40 X 140 </td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">45 X 150 </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">50 X 150 </td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">50 X 175 </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">50 X 200 </td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">60 X 280 </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-2 mx-5 m-2 border-2 border-neutral-700">
                    <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-center text-4xl font-bold bg-gray-900 text-white">Nozle Tip</motion.h3>
                    <div className="flex flex-col items-center justify-center mt-8 space-y-8">
                        <div className="flex flex-row items-center justify-center space-x-8">
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    className="w-[25vw] h-auto object-contain transform transition-transform duration-300 hover:scale-110"
                                    src={NozleTip}
                                    alt="Plug Piston"
                                />
                            </div>
                            <div className="w-[20vw]">
                                <table className="border-collapse border border-gray-500 text-xl w-full h-full">
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">30T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">130T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">40T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">200T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">50T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">160T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">88T</td>
                                            <td className="border border-gray-500 text-xl p-4 text-center font-bold">100T</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="flex items-center justify-center mt-5 ">
                <button className="rounded-xl border-2 py-2 px-1 border-black font-sans ">
                    <Link to={"/Products"}>View <span className="text-orange-500 ">All</span>  Products</Link>

                </button>
            </div>


            <WhatsappIntegrate />
        </>
    );
}

export default OurProducts;
