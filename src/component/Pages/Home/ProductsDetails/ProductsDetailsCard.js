import React from 'react';
import { Link } from 'react-router-dom';


const ProductsDetailsCard = ({productsDetails}) => {
    console.log(productsDetails)
    return (
        <div>
             <div className="card bg-slate-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">{}</h2>
                    {/* <div className='flex items-center text-center font-bold mt-5'>
                        <p>Price: {price} TK</p>
                        <p>Ratings: {rating}</p>
                    </div> */}
                    {/* <p>{description.slice(0,60)+ '...' }</p> */}
                    <div className='text-center'>
                    <Link >
                        <button className='underline btn btn-sm btn-accent mt-5'>Show Details</button>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsCard;