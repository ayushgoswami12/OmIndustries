import "./Showcase.css";
import Arrow from "../SVGS/Arrow.svg";
import Image3 from "../SiteImages/Industrial-Photoshoot.jpg";

function Showcase() {
  return (
    <>
      <div className="buy m-5">
        <p>BUY GOOD</p>
        <p>BE GOOD</p>
      </div>
      <div className="flex items-center pl-5 w-full overflow-x-hidden">
        <div className="flex justify-around h-[40vw] w-[31vw] gap-5">
          <img
            className="object-cover"
            src="https://images.pexels.com/photos/3421636/pexels-photo-3421636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="object-cover"
            src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="object-cover"
            src={Image3}
          />
        </div>
      </div>


      <div className="mt-20 md:mt-40 lg:mt-52 mx-5 md:mx-10 lg:mx-20">
        <div className="flex flex-col md:flex-row gap-16">
          <div>
            <img
              className="w-[90vw] md:w-[40vw] rounded-md"
              src="https://images.pexels.com/photos/3846390/pexels-photo-3846390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="w-[100%] md:w-[50vw] flex flex-col">
            <h1 className="text-xl font-bold pb-2 text-blue-500 tracking-widest">WELCOME TO</h1>
            <h1 className="text-3xl md:text-5xl font-bold pb-2 text-blue-500">
              Om <span className="text-black">Industries</span>
            </h1>
            <p className="text-gray-500 text-base md:text-xl font-bold pt-8">
              <span className="text-blue-500">Om</span>
              <span className="text-black"> Industries</span> is a metal casting
              company manufacturing the best quality Metal Casting Products.
              The massive range of products includes High Manganese{" "}
              <span className="text-blue-500">Steel Casting, S.G.I. Casting, C.I. Casting</span>,
              etc.
            </p>

            <p className="text-gray-500 text-base md:text-xl font-bold pt-8">
              The company was established in <span className="text-blue-500">1978</span> and has
              since been one of the renowned Cast Iron Castings Manufacturers
              in India. Based in Ahmedabad (Guj), India, the company operates
              with its reputed brand.
            </p>
            <p className="text-gray-500 text-base md:text-xl font-bold pt-8">
              Mr. Bashir M. Nagori, the revered CEO, has encouraged us to reach
              great success. Following are the qualities distinguishing us in
              the market.
            </p>
            <div className="flex flex-col md:flex-row gap-10 pt-5">
              <div className="flex items-center gap-3">
                <img className="w-[10vw] md:w-[5vw]" src={Arrow}></img>
                <h1 className="text-2xl md:text-4xl w-[40vw] md:w-[20vw] text-gray-500 font-bold">
                  <span className="text-black block">100% Client</span>
                  Satisfaction
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <img className="w-[10vw] md:w-[5vw]" src={Arrow}></img>
                <h1 className="text-2xl md:text-4xl w-[40vw] md:w-[20vw] text-gray-500 font-bold">
                  <span className="text-black block">Cutting Edge</span>
                  Technology
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showcase;
