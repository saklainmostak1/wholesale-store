import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Contact from "../../Pages/Contact/Contact";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllProductsDashboard from "../../Pages/Dashboard/AllProductsDashBoard/AllProductsDashboard";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ContactMessage from "../../Pages/Dashboard/ContactMessage/ContactMessage";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import DashboardNav from "../../Pages/Dashboard/DashBoardNav/DashboardNav";
import ManageReviews from "../../Pages/Dashboard/ManageReview/ManageReviews";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/allproducts',
                element: <AllProducts></AllProducts>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardNav></DashboardNav>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allproducts',
                element: <AllProductsDashboard></AllProductsDashboard>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/managereviews',
                element: <ManageReviews></ManageReviews>
            },
            {
                path: '/dashboard/contactmessage',
                element: <ContactMessage></ContactMessage>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },

        ]
    }
    
])