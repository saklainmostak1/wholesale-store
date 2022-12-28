import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Modal from '../Modal/Modal';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [orderProducts, setOrderProducts] = useState(null)
    const {user} = useContext(AuthContext)
    // console.log(products);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/products')
    //     .then(Response => Response.json())
    //     .then(data => setProducts(data))
    // }, [])
    const {data: products = [],  isLoading
    } = useQuery({
        queryKey: ['appointmentOptions'],
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
            
      <h2 className='text-3xl font-bold text-center'>All Products</h2>
        <div className=' m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
               products.slice(0,6).map(product => <ProductsCard
               key={product._id}
               product={product}
               setOrderProducts={setOrderProducts}
               ></ProductsCard>)
           }
         
        </div>
        <div> 
           
                
               {
                  orderProducts &&
                  <Modal
                  orderProducts={orderProducts}
                  setOrderProducts={setOrderProducts}
                  ></Modal>
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

export default Products;