import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import img from '../../../image/img3.jpg'

const HomeSection = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=' m-10  '>
            <div className="hero  bg-orange-200" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5 text-2xl text-emerald-400 font-bold">New season trends!</p>
                        <h1 className="mb-5 text-5xl font-bold">Best Summer Collection</h1>
                      
                       {
                          user?.uid ?
                          <>
                            <p className="mb-5">Click the link below and buy your products</p>
                           <Link className='underline text-lg' to='/allproducts'>
                            Get Started Shopping
                        </Link>
                          </>
                          :
                          ''
                       }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;