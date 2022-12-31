import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateProducts = () => {
    const updateProducts = useLoaderData()
    console.log(updateProducts);
    const [editProducts, setEditProducts] = useState(updateProducts)
    const handleEditeReview = event => {
        event.preventDefault()
        // console.log(editProducts);
        fetch(`http://localhost:5000/allProducts/${updateProducts._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editProducts)
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Successfully Update!');
                }

            })
    }

    const handleChange = event => {
        const field = event.target.name
        const value = event.target.value
        const review = { ...editProducts }
        review[field] = value
        setEditProducts(review)
    }
    return (
        <div className='m-10'>
        <div>
       <div>
           <h2 className='text-3xl text-center m-10'>Please Update Your profile </h2>
           <h2 className='text-xl text-center m-10'> Update Name And Photo </h2>
           <form onSubmit={handleEditeReview} >
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                   <input onChange={handleChange} name='name' type="text" placeholder="Name" defaultValue={updateProducts.name} className="input input-bordered input-success w-full " />
                   <input onChange={handleChange} name='image' defaultValue={updateProducts.image} type="photo" placeholder="photo" className="input input-bordered input-success w-full " required />
                   <input  name='price' defaultValue={updateProducts.price} type="text" placeholder="Price" className="input input-bordered input-success w-full " required disabled/>
                   <input  name='rating' defaultValue={updateProducts.rating} type="text" placeholder="role" className="input input-bordered input-success w-full " required disabled/>
               </div>
               <input className='btn mt-5 btn-outline btn-info mb-5' type="submit" value="Update Products" />
           </form>
       </div>
   </div>
   </div>
    );
};

export default UpdateProducts;