import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () =>{
        logOut()
        .then(() => {})
        .catch(error => {
            console.error(error)
        })
    }
    const menuItems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    {
        user?.uid ?
        <>
        <li><Link to='/dashboard'>DashBoard</Link></li>
        <li><Link onClick={handleLogout}>Logout</Link></li>
       <p className='mt-4 flex'><FaUser></FaUser>{user?.email}</p>
        </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
       
        </>
    }
</React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Fashion Fiesta <span className='text-red-500 ml-2'>Store</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
            </div>
        </div>
    );
};

export default Navbar;