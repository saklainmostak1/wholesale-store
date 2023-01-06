import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateReviews = () => {
    const updateReview = useLoaderData()
    console.log(updateReview);
    const [editReviews, setEditReviews] = useState(updateReview)

    const handleEditeReview = event => {
        event.preventDefault()
        // console.log(editReviews);
        fetch(`https://fashion-fiesta-store.vercel.app/productsRatings/${updateReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editReviews)
        })
            .then(Response => Response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('Successfully Update!');
                }

            })
    }

    const handleChange = event => {
        const field = event.target.name
        const value = event.target.value
        const review = { ...editReviews }
        review[field] = value
        setEditReviews(review)
    }
    return (
        <div className='m-10'>
            <div>
                <h2 className='text-3xl text-center m-10'>Please Update Your Review for {updateReview.foodname} </h2>
                <h2 className='text-xl text-center m-10'> Update Your Name And Text </h2>
                <form onSubmit={handleEditeReview} >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input onChange={handleChange} name='rating' type="text" placeholder="Name" defaultValue={updateReview.rating} className="input input-bordered input-success w-full " />
                        <input onChange={handleChange} name='text' defaultValue={updateReview.text} type="text" placeholder="Message" className="input input-bordered input-success w-full " required />
                    </div>
                    <input className='btn btn-outline btn-info mt-5' type="submit" value="Update Review" />
                </form>
            </div>
        </div>
    );
};

export default UpdateReviews;