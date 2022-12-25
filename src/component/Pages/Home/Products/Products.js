import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products , setProducts] = useState([])
    console.log(products);

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(Response => Response.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>

        <div className=' m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
               products.map(product => <ProductsCard
               key={product._id}
               product={product}
               ></ProductsCard>)
           }
         
        </div>
        <div className='text-center'>
          <Link to={'/allproducts'}>
          <button className="underline btn-sm mt-10 btn bg-gradient-to-r from-accent to-green-400 text-white border-none">Show More</button>
          </Link>
          </div>
        </div>
    );
};

export default Products;