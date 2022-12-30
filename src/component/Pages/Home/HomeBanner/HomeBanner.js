import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../image/Banner.webp'

const HomeBanner = () => {
  return (
    <div>
      <div className="hero bg-slate-500 mt-20">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <p className="py-6 text-white">Taking your Viewing Experience to Next Level</p>
            <h1 className="text-5xl text-yellow-50 font-bold">The most popular wholesale
              store in Bangladesh</h1>
          
            <Link to='/contact'>
            <button className='btn btn-primary mt-5'>Get In Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;