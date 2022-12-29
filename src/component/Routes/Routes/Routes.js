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
import MyReviews from "../../Pages/Dashboard/User/MyReviews/MyReviews";
import Home from "../../Pages/Home/Home/Home";
import ProductsDetails from "../../Pages/Home/ProductsDetails/ProductsDetails";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ReportProducts from "../../Pages/ReportProducts/ReportProducts";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoutes/BuyerRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                element: <PrivateRoutes><AllProducts></AllProducts></PrivateRoutes>
            },
            {
                path: '/report/:id',
                element: <ReportProducts></ReportProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/allProducts/${params.id}`)
            },
            {
                path: '/productsDetails/:id',
                element:<ProductsDetails></ProductsDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allProducts/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardNav></DashboardNav></PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '/dashboard/allproducts',
                element: <AdminRoute><AllProductsDashboard></AllProductsDashboard></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <AdminRoute><AddProducts></AddProducts></AdminRoute>
            },
            {
                path: '/dashboard/managereviews',
                element: <AdminRoute><ManageReviews></ManageReviews></AdminRoute>
            },
            {
                path: '/dashboard/contactmessage',
                element: <AdminRoute><ContactMessage></ContactMessage></AdminRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/myprofile',
                element: <BuyerRoute><MyProfile></MyProfile></BuyerRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myreviews',
                element: <BuyerRoute><MyReviews></MyReviews></BuyerRoute>
            },
            {
                path: '/dashboard/reportproducts',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            },

        ]
    }
    
])