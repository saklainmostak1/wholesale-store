import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import 'react-photo-view/dist/react-photo-view.css';

const AllProductsCard = ({allproduct, setOrderProducts}) => {
    const { user } = useContext(AuthContext)
    const { name, price, image, description, rating,  _id } = allproduct
    return (
        
             <div>
            <div className="card bg-slate-200 shadow-xl">
                <figure className="px-10 pt-10">
                <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" className="rounded-xl" />
                </PhotoView>
            </PhotoProvider>
                    {/* <img src={image} alt="" className="rounded-xl" /> */}
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-center text-green-500 text-xl font-bold">{name}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions">
                        <p> Rating: {rating} </p>
                        <p className='text-orange-300 mt-1'><FaStar></FaStar></p>
                    </div>
                    {/* <p >Order Quantity : {quantity.length > 0 ? quantity[0]: 'Not Available' }</p>
                        <p >Available : {quantity.length} {quantity.length > 1 ? 'Products': 'Product'}</p> */}
                    <p>{description.slice(0, 56) + '...'}</p>
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <div className='flex justify-evenly'>

                                        <Link to={`/productsDetails/${_id}`}>
                                            <button className='underline text-blue-300'>Show Details</button>
                                        </Link>
                                        <Link to={`/report/${_id}`}>
                                            <button className='underline text-red-500'>Report To Admin</button>
                                        </Link>

                                    </div>
                                  
                                        <div className='text-center mt-5'>
                                            {
                                                allproduct.price && !allproduct.orderd &&
                                                <label
                                                onClick={() =>setOrderProducts(allproduct) }
                                                    
                                                    htmlFor="order-modal"
                                                    className=' underline btn btn-sm btn-accent mt-5'>Order Now</label>
                                            }

                                            {
                                                allproduct.price && allproduct.orderd &&
                                                <span className='text-primary '> Sorry!!!! <br /> Out Of Stock</span>
                                            }
                                        </div>
                                        {/* <label
                        onClick={() => setOrderProducts(product)}
                        htmlFor="order-modal"  className='underline btn btn-sm btn-accent mt-5'>Order Now</label> */}
                                 

                                </>
                                :
                                <div className='mt-5 text-red-600'>
                                    <p>To Order Products And See All Products Please</p>
                                    <p className='underline text-blue-600'> <Link to='/login'>Login</Link></p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AllProductsCard;