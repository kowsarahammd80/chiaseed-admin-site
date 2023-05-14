import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Home from "../../Components/Home/Home";
import ChiaseedNutritionalValue from "../../Components/Home/ChiaseedNutritionalValue/ChiaseedNutritionalValue";
import Product from "../../Components/Home/Product/Product";

const routers = createBrowserRouter([

   {
     path: '/',
     element: <Main/>,
     children: [
         
      {
        path:'/',
        element: <Home/>
      },

      {
        path: '/NutritionalValue',
        element: <ChiaseedNutritionalValue/>
      },

      {
        path: '/product',
        element: <Product/>
      }


     ]
   } 
   
])

export default routers;