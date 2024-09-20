import PlugPiston from "../assets/straightpic/plungerpiston.png";
import NozleTip from "../assets/nozzletip.png";
import NozzleHeater1 from "../assets/NozzleHeater1.png";
import NozzleHeater2 from "../assets/NozzleHeater2.png";
import Header from "../HomePage/Headers";
// import CustomCursor from "../HomePage/CustomCursor";
import { motion } from 'framer-motion';

function ProductsAll() {
    return (
        <>
            {/* <CustomCursor></CustomCursor> */}
            <Header></Header>
            <div>
                <motion.h1
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="productHeading text-6xl font-bold text-center m-5 py-2 uppercase bg-black text-white">
                    Our <span className="text-orange-500">Products</span>
                </motion.h1>

                {/* Product Sections */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    transition={{ duration: 1.5, delay: 0.1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="p-2 m-2 mx-5 border-2 border-neutral-700"
                >
                    <h3 className="text-center text-4xl font-bold bg-gray-900 text-white">Piston</h3>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center justify-center mt-8 space-y-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                            {/* Image section */}
                            <div className="flex flex-col items-center space-y-4 md:w-[15vw]">
                                <img
                                    className="w-full h-auto object-contain transform transition-transform duration-300 hover:scale-110"
                                    src={PlugPiston}
                                    alt="Plug Piston"
                                />
                            </div>

                            {/* Table section */}
                            <div className="w-full md:w-[20vw]">
                                <h3 className="font-bold text-xl md:text-2xl">Application : Zinc Dye Casting</h3>
                                <table className="border-collapse border border-gray-500 text-sm md:text-xl w-full h-full">
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">30T</td>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">130T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">40T</td>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">200T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">50T</td>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">160T</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">88T</td>
                                            <td className="border border-gray-500 text-sm md:text-xl p-2 md:p-4 text-center font-bold">100T</td>
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
                    className="p-2 mx-5 m-2 border-2 border-neutral-700"
                >
                    <h3 className="text-center text-4xl font-bold bg-gray-900 text-white">Nozzle Heater1</h3>
                    <div className="flex flex-col items-center justify-center mt-8 space-y-8 md:flex-row md:space-y-0 md:space-x-8">
                        <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center">
                            <img
                                className="w-[80vw] h-auto object-contain transform transition-transform duration-300 hover:scale-105 md:w-[15vw] md:scale-100"
                                src={NozzleHeater1}
                                alt="Nozzle Heater 1"
                            />
                            <img
                                className="w-[80vw] h-auto object-contain transform transition-transform duration-300 hover:scale-110 md:w-[15vw] md:scale-100"
                                src={NozzleHeater2}
                                alt="Nozzle Heater 2"
                            />
                        </div>
                        <div className="w-[80vw] md:w-[20vw]">
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
            {/* --------------------------------------------- */}
        </>
    );
}

export default ProductsAll;
