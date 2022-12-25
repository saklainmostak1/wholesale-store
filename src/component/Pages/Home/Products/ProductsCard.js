import React from 'react';

const ProductsCard = ({product}) => {
    const {image, name, price, rating, description } = product
    return (
        <div>
           <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="text-center text-xl font-bold">{name}</h2>
    <div className='flex items-center text-center font-bold mt-5'>
        <p>Price: {price} TK</p>
        <p>Ratings: {rating}</p>
    </div>
    <p className='mt-5'>{description}</p>
    <button className='btn btn-sm btn-accent mt-5'>Show Details</button>
  </div>
</div>
        </div>
    );
};

export default ProductsCard;