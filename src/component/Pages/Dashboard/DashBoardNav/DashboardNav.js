import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardNav = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu bg-white text-black p-4 w-80 ">
                    <li><Link to='/dashboard'>DashBoard</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link to='/dashboard/allusers'>All Users</Link></li>
                    <li><Link to='/dashboard/allproducts'>All Products</Link></li>
                    <li><Link to='/dashboard/addproducts'>Add A Products</Link></li>
                    <li><Link to='/dashboard/managereviews'>Manage Reviews</Link></li>
                    <li><Link to='/dashboard/reportproducts'>Reported Products</Link></li>
                    <li><Link to='/dashboard/contactmessage'>Contact Message</Link></li>
                    
                    
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                    <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/managedoctors'>Payments</Link></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default DashboardNav;