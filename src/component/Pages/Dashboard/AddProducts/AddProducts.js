import React from 'react';
import { toast } from 'react-hot-toast';

const AddProducts = () => {
    const handleAddProducts = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const image = form.photoURL.value
        const price = form.price.value
        const rating = form.Rating.value
        const description = form.description.value
        console.log(name, image, price, rating, description);

        const addProducts = {
            name, image, price, rating, description
        }
        fetch('https://fashion-fiesta-store.vercel.app/addProducts', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addProducts)

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
    }
    return (
        <div className='m-10'>
        <h2 className="text-4xl text-center mb-5">Add Products</h2>
        <form onSubmit={handleAddProducts}>
            {/* <h2 className="text-4xl">{}</h2>
            <h4 className="text-3xl">Price: $ {}</h4> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='name' type="text" placeholder="Products Name" className="input input-bordered input-success w-full " required />
                <input name='price' type="text" placeholder="Products Price" className="input input-bordered input-success w-full " required />
                <input name='photoURL' type="text" placeholder="Products Photo" className="input input-bordered input-success w-full " required />
                <input name='Rating' type="text" placeholder="Rating"
                    className="input input-bordered input-success w-full " required />
            </div>
            <textarea name='description' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Add Description"></textarea>
            <input className='btn btn-outline btn-info mb-5' type="submit" value="Add Products" />
        </form>
    </div>
    );
};

export default AddProducts;