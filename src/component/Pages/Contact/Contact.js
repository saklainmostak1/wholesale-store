import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Contact = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const description = form.description.value
       
        const ratings = {name, email, description}
    
        fetch('https://fashion-fiesta-store.vercel.app/contact', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(ratings)
    
        })
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        form.reset('')
        
    
      }
    return (
        <div>
             <form onSubmit={handleSubmit} className='m-20' >
                <h2 className="text-4xl text-center mb-16">Contact With Us</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered input-success w-full " required />
                    <input name='email' defaultValue={user?.email} type="email" placeholder="Your Email" className="input input-bordered input-success w-full " required  disabled/>
                </div>
                <textarea name='description' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Add Description"></textarea>
                <input className='btn btn-outline btn-info mb-5 ' type="submit" value="Send Messege" />
            </form>
        </div>
    );
};

export default Contact;