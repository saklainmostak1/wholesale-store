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
import ReportedProducts from "../../Pages/Dashboard/ReportedProducts/ReportedProducts";
import MyOrders from "../../Pages/Dashboard/User/MyOrders/MyOrders";
import MyProfile from "../../Pages/Dashboard/User/MyProfile/MyProfile";
import Home from "../../Pages/Home/Home/Home";
import ProductsDetails from "../../Pages/Home/ProductsDetails/ProductsDetails";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ReportProducts from "../../Pages/ReportProducts/ReportProducts";
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
            {
                path: '/report/:id',
                element: <ReportProducts></ReportProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/allProducts/${params.id}`)
            },
            {
                path: '/allproducts/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allProducts/${params.id}`)
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
            {
                path: '/dashboard/myprofile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/reportproducts',
                element: <ReportedProducts></ReportedProducts>
            },

        ]
    }
    
])