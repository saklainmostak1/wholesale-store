import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const AddReview = ({productsDetailss}) => {
    const {_id } = productsDetailss
    console.log(productsDetailss);
    const {user} = useContext(AuthContext)
    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photoURL.value
        const rating = form.rating.value
        const productName = form.productName.value
        const text = form.message.value
        // console.log(name, rating, text);

        const review = { 
            products: _id,
            name,
            email,
            photo,
            rating,
            productName,
            text
        }
        fetch('http://localhost:5000/productsReviews', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log( data);
                if(data.acknowledged){
                    toast.success('Successfully Review Add!');
                    form.reset('')
                }
            })
            .catch((error) => {
                console.error( error);
            });
    }
    return (
        <div className='m-20'>
            {
                user?.email ? 
                <form onSubmit={handleReview}>
                <h2 className="text-4xl text-center mb-10">Add A Review to {productsDetailss.name}</h2>
                {/* <h4 className="text-3xl">Price: $ {}</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                    <input name='email' type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered input-success w-full " disabled />
                    <input name='photoURL' type="photo" placeholder="photoURL" defaultValue={user?.photoURL} className="input input-bordered input-success w-full " disabled />
                    <input name='rating' type="text" placeholder="Ratings" className="input input-bordered input-success w-full " required />
                    <input name='productName'  type="text" placeholder="Products Name" defaultValue={productsDetailss.name} className="input input-bordered input-success w-full " disabled/>
                    {/* <img className='rounded-full h-24 w-24' src={user?.photoURL} alt="" /> */}
                    
                </div>
                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                <input className='btn btn-outline btn-info mb-5' type="submit" value="Send Review" />
            </form>
                
                :
                <h2 className='text-3xl m-10 text-red-500'>Please Log in to add a review !!!!</h2>
               
            }
        </div>
    );
};

export default AddReview;