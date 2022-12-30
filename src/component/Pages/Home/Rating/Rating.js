
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import img from '../../../image/contact1.png'


const Rating = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  
  const handleSubmit = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const rating = form.rating.value
    const message = form.message.value
    const ratings = {name, email, rating, message, photo}
    console.log(photo)
    fetch('http://localhost:5000/ratings', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(ratings)

    })
    .then(Response => Response.json())
    .then(data => {
      console.log(data)
      if (data.acknowledged) {
       
        toast.success('Review Website Sucessfully')
        // refetch()
    }
    })
    .catch(error => console.error(error))
    form.reset('')
    console.log(name, email, rating, message )

  }
    return (
        <div>
              
           {
              user?.uid ? 
              <>
               <div className="hero my-20 w-full">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 py-5 ">
          
            <form onSubmit={handleSubmit} className='grid justify-center'>
                <div className='grid grid-cols-1 gap-4'>
                    <input name='name'  type="text" placeholder="Your Name" className="input input-bordered input-success " required />
                    <input name='photo'  type="text" placeholder="Your Photo" defaultValue={user?.photoURL} className="input input-bordered input-success " required disabled />
                    <input defaultValue={user?.email} name='email' type="email" placeholder="email" className=" input input-bordered input-success  " disabled/>
                    <input name='rating' type="text" placeholder="rating" className=" input input-bordered input-success  " />
                
                <textarea name='message' className="textarea textarea-info mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
              <button type="submit" className='btn'>Send Review</button>
                </div>
            </form>
          </div>
        </div>
      </div>
              
              </>
              :
              ""
           }
        </div>
    );
};

export default Rating;