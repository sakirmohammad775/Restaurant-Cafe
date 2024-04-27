import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SIgnUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Shared/Secret/Secret";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Dashboard/Cart";
import AllUsers from "../Dashboard/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <OurMenu></OurMenu>
      },
      {
        path:'order/:category',
        element:<Order></Order>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'secret',
        element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
      }
    ]
  },
  {
    path:"dashboard",
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
      {
        path:"cart",
        element:<Cart></Cart>
      },
      {
        path:'users',
        element:<AllUsers></AllUsers>
      }
    ]

  }
]);