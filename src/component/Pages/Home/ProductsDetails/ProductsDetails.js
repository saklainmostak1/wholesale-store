import React from 'react';
import { useLoaderData } from 'react-router-dom';



const ProductsDetails = () => {
    const productsDetailss = useLoaderData()
const {name, price , image, description, rating } = productsDetailss
    console.log(productsDetailss);

    return (
        <div className='m-10'>
           
             <div className="card max-w-[800px] mx-auto bg-slate-200 shadow-xl">
             <h2 className="text-center mb-3 text-4xl mt-5 font-bold"> Details Of {name}</h2>
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center mb-3 text-xl font-bold">{name}</h2>
                    <div className='text-center mb-3'>
                        <p className='mb-3'>Price : {price} TK</p>
                       
                        <p>Ratings : {rating}</p>
                       
                    
                    </div>
                    <p className='text-center'>{description}</p>
                    <div className='text-center'>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;