import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import AllProductsCard from './AllProductsCard';
import AllProductsModal from './AllProductsModal';

const AllProducts = () => {
    const [orderProducts, setOrderProducts] = useState([])
    const {user} = useContext(AuthContext)
 
    const {data: products = [],  isLoading, refetch
    } = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
           const res = await   fetch('https://fashion-fiesta-store.vercel.app/allProducts')
        const data = await res.json()
        return data
    }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
              <h2 className='text-3xl font-bold text-center'>All Products</h2>
              <div className=' m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
              products.map(allproduct =>
                <AllProductsCard
                key={allproduct._id}
                allproduct={allproduct}
                setOrderProducts={setOrderProducts}
                ></AllProductsCard>
                
                )
           }
         
        </div>
            <div>
               {
                   orderProducts &&
                    
                <AllProductsModal
                orderProducts={orderProducts}
                setOrderProducts={setOrderProducts}
                refetch={refetch}
                ></AllProductsModal>
               }
            </div>
            {/* {
          user?.uid ? 
          <>
           <div className='text-center'>
          <Link to={'/allproducts'}>
          <button className="underline btn-sm mt-10 btn bg-gradient-to-r from-accent to-green-400 text-white border-none">Show More</button>
          </Link>
          </div>
          </>
          :
          ''
       } */}
        </div>
    );
};

export default AllProducts;