
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from "./HomePage/HomePage";

import Brochure from "./Brochure/Brochure.jsx";
import Contact from "./Contact/Contact.jsx";
import Gooseneck from "./ProductsPage/Gooseneck.jsx";
import Nozzle from "./ProductsPage/Noozle.jsx";
import Piston from "./ProductsPage/Piston.jsx";
import NozzleSocket from "./ProductsPage/NozzleSocket.jsx";
import Ring from "./ProductsPage/Ring.jsx";
import C_CLamp from "./ProductsPage/C_CLamp.jsx";
import Error from "./Error.jsx";

let routes = createBrowserRouter([
  {path:"/" , element:<HomePage></HomePage>,errorElement:<Error></Error>} , 
  {path:"/Brochure", element:<Brochure />} , 
  {path:"/Contact", element:<Contact />} , 
  {path:"/Product/gooseneck", element:<Gooseneck></Gooseneck>} , 
  {path:"/Product/nozzle", element:<Nozzle></Nozzle>} , 
  {path:"/Product/Piston", element:<Piston></Piston>} , 
  {path:"/product/Nozzle-Socket", element:<NozzleSocket></NozzleSocket>} , 
  {path:"/product/Ring", element:<Ring></Ring>} , 
  {path:"/product/CClamp", element:<C_CLamp></C_CLamp>} , 
  // {path:"/Contact", element:<Contact />} , 
 

 
 

])

function App() {
  return (
    
    <>

    <div>
      <RouterProvider router={routes}></RouterProvider>
      {/* <Hero></Hero> */}
    </div>
    </>
  )
}

export default App
