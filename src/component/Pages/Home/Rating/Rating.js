import React from 'react';
import img from '../../../image/contact1.png'

const Rating = () => {
    return (
        <div>
              <h1 className="text-5xl font-bold text-center mb-10">Reviews On Us</h1>
            <div className="hero my-20 w-full">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 py-5 ">
          
            <form className='grid justify-center'>
                <div className='grid grid-cols-1 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success " required />
                    <input name='email' type="email" placeholder="email" className=" input input-bordered input-success  " />
                    <input name='rating' type="text" placeholder="rating" className=" input input-bordered input-success  " />
                
                <textarea name='message' className="textarea textarea-info mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
              <button type="submit" className='btn'>Send Review</button>
                </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Rating;