import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import OrderModal from '../OrderModal/OrderModal';
import Loading from '../Shared/Loading/Loading';
// import { Link } from 'react-router-dom';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const [orderProducts, setOrderProducts] = useState(null)
    // const [allProducts , setAllProducts] = useState([])
    // console.log(allProducts);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/allProducts')
    //     .then(Response => Response.json())
    //     .then(data => setAllProducts(data))
    // }, [])
    const {data: allProducts = [],  isLoading, refetch
    } = useQuery({
        queryKey: ['allProducts'],
        queryFn: async() => {
           const res = await   fetch('http://localhost:5000/allProducts')
        const data = await res.json()
        return data
    }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>

        <div className='m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
               allProducts.map(product => <AllProductsCard
               key={product._id}
               product={product}
               setOrderProducts={setOrderProducts}
               ></AllProductsCard>)
           }
         
        </div>
        {/* <div className='text-center'>
          <Link to={'/allproducts'}>
          <button className="underline btn-sm mt-10 btn bg-gradient-to-r from-accent to-green-400 text-white border-none">Show More</button>
          </Link>
          </div> */}
        {
            orderProducts &&
            <OrderModal
            orderProducts={orderProducts}
            setOrderProducts={setOrderProducts}
            refetch={refetch}
            ></OrderModal>
        }
        </div>
    );
};

export default AllProducts;