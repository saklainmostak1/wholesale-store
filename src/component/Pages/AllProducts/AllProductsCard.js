import React from 'react';
import { Link } from 'react-router-dom';

const AllProductsCard = ({ product, setOrderProducts }) => {
    const { image, name, description, _id, rating, quantity, price } = product
    // price, rating,
    return (
        <div>
            <div className="card  bg-slate-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-green-500 text-xl font-bold">{name}</h2>
                    <div className='text-center mb-3'>
                        <p className='mb-3'>Price : {price} TK</p>
                        <p>Ratings : {rating}</p>
                        <p className='mt-3'>Order Quantity : {quantity.length > 0 ? quantity[0] : 'Not Available'}</p>
                        <p className='mt-3'>Available : {quantity.length} {quantity.length > 1 ? 'Products' : 'Product'}</p>
                    </div>
                    <p>{description.slice(0, 60) + '...'}</p>

                    <div className='text-center flex justify-evenly'>
                        <Link to={`/allproducts/${_id}`}>
                            <button className=' mt-5 text-blue-400 underline '>Review Now</button>
                        </Link>
                        <Link>
                            <button className=' mt-5 text-red-400 underline '>Report to Admin</button>
                        </Link>
                    </div>
                    <div className='text-center'>
                        <label 
                        disabled={quantity.length === 0}
                        onClick={() => setOrderProducts(product)} 
                         htmlFor="booking-modal" 
                         className=' underline btn btn-sm btn-accent mt-5'>Order Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;