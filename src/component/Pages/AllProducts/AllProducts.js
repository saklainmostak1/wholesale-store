import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading/Loading';
// import { Link } from 'react-router-dom';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    // const [allProducts , setAllProducts] = useState([])
    // console.log(allProducts);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/allProducts')
    //     .then(Response => Response.json())
    //     .then(data => setAllProducts(data))
    // }, [])
    const {data: allProducts = [],  isLoading
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

        <div className='m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
               allProducts.map(product => <AllProductsCard
               key={product._id}
               product={product}
               ></AllProductsCard>)
           }
         
        </div>
        {/* <div className='text-center'>
          <Link to={'/allproducts'}>
          <button className="underline btn-sm mt-10 btn bg-gradient-to-r from-accent to-green-400 text-white border-none">Show More</button>
          </Link>
          </div> */}
        </div>
    );
};

export default AllProducts;