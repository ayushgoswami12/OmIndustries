
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from "./HomePage/HomePage";

import Brochure from "./Brochure/Brochure.jsx";
import Contact from "./Contact/Contact.jsx";
import Gooseneck from "./ProductsPage/Gooseneck.jsx";
import Nozzle from "./ProductsPage/Noozle.jsx";

let routes = createBrowserRouter([
  {path:"/" , element:<HomePage></HomePage>} , 
  {path:"/Brochure", element:<Brochure />} , 
  {path:"/Contact", element:<Contact />} , 
  {path:"/Product/gooseneck", element:<Gooseneck></Gooseneck>} , 
  {path:"/Product/nozzle", element:<Nozzle></Nozzle>} , 
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
