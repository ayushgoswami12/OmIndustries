
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Services from "./HomePage/Services.jsx";

let routes = createBrowserRouter([
  {path:"/" , element:<HomePage></HomePage>} , 
  {path:"/Products", element:<Services />} , 
 

 
 

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
