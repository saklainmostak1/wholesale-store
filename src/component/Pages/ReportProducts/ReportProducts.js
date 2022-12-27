import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ReportProducts = () => {
    const allProducts = useLoaderData()
    console.log(allProducts)
    const {user} = useContext(AuthContext)
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const products = form.products.value
        const email = form.email.value
        const description = form.description.value
       
        const reports = {name, email, description, products}
    
        fetch('http://localhost:5000/report', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(reports)
    
        })
        .then(Response => Response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        form.reset('')
        
    
      }
    return (
        <div>
             <form onSubmit={handleSubmit} className='m-20' >
                <h2 className="text-4xl text-center mb-16">Report To Admin</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='products' type="text" placeholder="Products Name" defaultValue={allProducts.name} className="input input-bordered input-success w-full " required disabled />
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success w-full " required />
                    <input name='email' defaultValue={user?.email} type="email" placeholder="Your Email" className="input input-bordered input-success w-full " required  disabled/>
                </div>
                <textarea name='description' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Your Report Message"></textarea>
                <input className='btn btn-outline btn-info mb-5 ' type="submit" value="Send Messege" />
            </form>
        </div>
    );
};

export default ReportProducts;