import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateProfile = () => {
    const updateProfile = useLoaderData()
    console.log(updateProfile);
    const [editProfile, setEditProfile] = useState(updateProfile)
    const handleEditeReview = event => {
        event.preventDefault()
        // console.log(editProfile);
        fetch(`https://fashion-fiesta-store.vercel.app/users/${updateProfile._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editProfile)
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
        const review = { ...editProfile }
        review[field] = value
        setEditProfile(review)
    }
    return (
        <div className='m-10'>
             <div>
            <div>
                <h2 className='text-3xl text-center m-10'>Please Update Your profile </h2>
                <h2 className='text-xl text-center m-10'> Update Your Name And Photo </h2>
                <form onSubmit={handleEditeReview} >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input onChange={handleChange} name='name' type="text" placeholder="Name" defaultValue={updateProfile.name} className="input input-bordered input-success w-full " />
                        <input onChange={handleChange} name='photo' defaultValue={updateProfile.photo} type="photo" placeholder="photo" className="input input-bordered input-success w-full " required />
                        <input  name='email' defaultValue={updateProfile.email} type="text" placeholder="email" className="input input-bordered input-success w-full " required disabled/>
                        <input  name='role' defaultValue={updateProfile.role} type="text" placeholder="role" className="input input-bordered input-success w-full " required disabled/>
                    </div>
                    <input className='btn mt-5 btn-outline btn-info mb-5' type="submit" value="Update Profile" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateProfile;