import React from 'react';
import img from '../../../image/img3.jpg'

const HomeSection = () => {
    return (
        <div className=' m-10  '>
            <div className="hero  bg-orange-200" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p className="mb-5 text-green-500 font-bold">New season trends!</p>
                        <h1 className="mb-5 text-5xl font-bold">Best Summer Collection</h1>
                        <p className="mb-5">Click the link below and buy your products</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;