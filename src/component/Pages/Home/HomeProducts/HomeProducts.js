import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import AllProductsModal from '../../AllProducts/AllProductsModal';
import Loading from '../../Shared/Loading/Loading';
import HomeProductsCard from './HomeProductsCard';

const HomeProducts = () => {
    const [orderProducts, setOrderProducts] = useState([])
    const {user} = useContext(AuthContext)
 
    const {data: homeProducts = [],  isLoading, refetch
    } = useQuery({
        queryKey: ['homeProducts'],
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
        homeProducts.slice(0,3).map(homeProduct =>
        <HomeProductsCard
        key={homeProduct._id}
        homeProduct={homeProduct}
        setOrderProducts={setOrderProducts}
        ></HomeProductsCard>
          
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
      {
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
 }
  </div>
    );
};

export default HomeProducts;