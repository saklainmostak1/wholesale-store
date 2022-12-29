import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReview from '../AddProductsReview/AddReview/AddReview';
import GetReview from '../AddProductsReview/GetReview/GetReview';


const ProductsDetails = () => {
  const productsDetailss = useLoaderData()
  const { name, price, image, description, rating, quantity } = productsDetailss
  // console.log(productsDetailss);

  return (
    <>
      <div className='m-10'>

        <div className="card max-w-[800px] mx-auto bg-slate-200 shadow-xl">
          <h2 className="text-center mb-3 text-4xl mt-5 font-bold text-green-600"> Details Of {name}</h2>
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="text-blue-500 text-center mb-3 text-xl font-bold">{name}</h2>
            <div className='text-center mb-3'>
              <p className='mb-3'>Price : {price} TK</p>

              <p>Ratings : {rating}</p>

              {/* <p className='mt-3'>Order Quantity : {quantity.length > 0 ? quantity[0]: 'Not Available' }</p>
                      <p className='mt-3'>Available : {quantity.length} {quantity.length > 1 ? 'Products': 'Product'}</p> */}
            </div>
            <p className='text-center'>{description}</p>

            {/* <div className='text-center'>
                     <Link>
                          <button className=' mt-10 btn btn-outline btn-accent btn-sm'>Order Now</button>
                     </Link>
                  </div> */}

          </div>
        </div>
      </div>
      <div>
        <GetReview
          key={productsDetailss._id}
          productsDetailss={productsDetailss}
        ></GetReview>
      </div>
      <div>
        <AddReview
          key={productsDetailss._id}
          productsDetailss={productsDetailss}
        ></AddReview>
      </div>

    </>
  );
};

export default ProductsDetails;