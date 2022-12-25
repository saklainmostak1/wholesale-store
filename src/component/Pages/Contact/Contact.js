import React from 'react';

const Contact = () => {
    return (
        <div>
             <form className='m-20' >
                <h2 className="text-4xl text-center mb-16">Contact With Us</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered input-success w-full " required />
                    <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-success w-full " required />
                </div>
                <textarea name='description' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Add Description"></textarea>
                <input className='btn btn-outline btn-info mb-5 ' type="submit" value="Send Messege" />
            </form>
        </div>
    );
};

export default Contact;