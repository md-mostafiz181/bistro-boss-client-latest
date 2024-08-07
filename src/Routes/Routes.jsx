import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Home/Home/Secret/Secret";
import DashboardLayout from "../Layout/DashboardLayout";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Review from "../Pages/Dashboard/Review/Review";
import Bookings from "../Pages/Dashboard/Bookings/Bookings";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/menu",
        element:<Menu></Menu>
      },
      {
        path:"order/:category",
        element:<Order></Order>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"signup",
        element:<SignUp></SignUp>
      },
      {
        path:"secret",
        element:<PrivateRoute> <Secret></Secret> </PrivateRoute>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      }
    ],

 
  },
  {
    path:"dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      // user only dashboard
      {
        path:"cart",
        element:<Cart></Cart>
      },
      {
        path:"review",
        element:<Review></Review>
      },
      {
        path:"bookings",
        element:<Bookings></Bookings>
      },
      {
        path:"reservation",
        element: <Reservation></Reservation>
      },
      {
        path:"userHome",
        element:<UserHome></UserHome>

      },

      // admin only route
      {
        path:"adminHome",
        element:<AdminHome></AdminHome>
      },
      {
        path:"addItems",
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:"manageItems",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:"manageBookings",
        element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
      },
      {
        path:"allUsers",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
  
]);
