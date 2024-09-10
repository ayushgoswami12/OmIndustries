
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from "./HomePage/HomePage";

import Brochure from "./Brochure/Brochure.jsx";
import Contact from "./Contact/Contact.jsx";
import Products from "./ProductsAll/ProductsAll.jsx"
import Error from "./Error.jsx";

let routes = createBrowserRouter([
  {path:"/" , element:<HomePage></HomePage>,errorElement:<Error></Error>} , 
  {path:"/Brochure", element:<Brochure />} , 
  {path:"/Contact", element:<Contact />} , 
  {path:"/Products", element:<Products />} , 

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
