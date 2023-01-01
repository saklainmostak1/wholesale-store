import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
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
                    <li><Link to='/allproducts'>All Products</Link></li>
                    <li><Link to='/charts'>Products Charts</Link></li>
                    <li><Link to='/dashboard'>DashBoard</Link></li>
                    {/* <li><Link onClick={handleLogout}>Logout</Link></li> */}
                    {/* <p className='mt-4 flex'> < FaUser>

                    </FaUser> <p className='-mt-1 ml-2'> {user?.displayName}</p></p> */}
                    <button >
                        <p className='mt-4 flex'>
                            <div className="dropdown  lg:dropdown-end">
                                <label tabIndex={0} className="btn m-1"><FaUser></FaUser></label>
                                <ul tabIndex={0} className=" dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <div className='flex mb-2'>

                                        <li><Link> {user?.displayName}</Link></li>
                                        <div className="avatar online placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <li className='btn btn-primary'><Link onClick={handleLogout}>Logout</Link></li>
                                </ul>
                                {/* <div tabIndex={0} className="dropdown-content card card-compact p-2 shadow bg-warning text-primary-content">
                                    <div className="card-body">
                                        <h3 className="card-title"><p className='-mt-1 ml-2'> {user?.displayName}</p></h3>
                                        <li className='btn btn-primary'><Link onClick={handleLogout}>Logout</Link></li>
                                    </div>
                                </div> */}
                            </div>
                            {/* <p className='-mt-1 ml-2'> {user?.displayName}</p> */}
                        </p>
                    </button>
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
            <div className="navbar bg-base-100 flex justify-between  ">
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