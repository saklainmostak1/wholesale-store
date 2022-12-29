import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const ProductsCard = ({ product , setOrderProducts}) => {
    console.log(product);
    const {user} = useContext(AuthContext)
    const { name, price , image, description, rating,  quantity, _id} = product
    // price, rating ,_id
    return (
        <div>
            <div className="card bg-slate-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="text-center text-green-500 text-xl font-bold">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    {/* <p >Order Quantity : {quantity.length > 0 ? quantity[0]: 'Not Available' }</p>
                        <p >Available : {quantity.length} {quantity.length > 1 ? 'Products': 'Product'}</p> */}
                    <p>{description.slice(0,56)+ '...' }</p>
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
                        <div>
                        <label
                        onClick={() => setOrderProducts(product)}
                        htmlFor="order-modal"  className='underline btn btn-sm btn-accent mt-5'>Order Now</label>
                        </div>
                           
                           </>
                    :
                   <div className='mt-5 text-red-600 text-2xl'>
                     Please Login To Order Products And See All Products
                   </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;