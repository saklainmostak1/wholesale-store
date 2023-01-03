import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProductsCard = ({ product, setOrderProducts }) => {

    const { image, name, description, _id, rating, price } = product

    console.log();



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
                        <div className="card-actions">
                            <p> Rating: {rating} </p>
                            <p className='text-orange-300 mt-1'><FaStar></FaStar></p>
                        </div>
                        {/* <p className='mt-3'>Order Quantity : {quantity.length > 0 ? quantity[0] : 'Not Available'}</p>
                        <p className='mt-3'>Available : {quantity.length} {quantity.length > 1 ? 'Products' : 'Product'}</p> */}
                    </div>
                    <p className='text-center'>{description.slice(0, 56) + '...'}</p>

                    <div className='text-center flex justify-evenly'>
                        <Link to={`/productsDetails/${_id}`}>
                            <button className=' mt-5 text-blue-400 underline '>Show Details</button>
                        </Link>
                        {/* <Link to={`/allproducts/${_id}`}>
                            <button className=' mt-5 text-blue-400 underline '>Show Details</button>
                        </Link> */}
                        <Link to={`/report/${_id}`}>
                            <button className=' mt-5 text-red-400 underline '>Report to Admin</button>
                        </Link>
                    </div>
                    <div className='text-center mt-5'>
                        {
                            product.price && !product.orderd &&
                            <label

                                onClick={() => setOrderProducts(product)}
                                htmlFor="booking-modal"
                                className=' underline btn btn-sm btn-accent mt-5'>Order Now</label>
                        }

                        {
                            product.price && product.orderd &&
                            <span className='text-primary '> Sorry!!!! <br /> Out Of Stock</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCard;