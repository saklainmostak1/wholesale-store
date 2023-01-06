import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import Rating from '../Rating/Rating';
import RatingsCard from './RatingsCard';

const ShowRatings = () => {
    // const [ratings, setRatings] = useState([])
    // useEffect(() => {
    //     fetch('https://fashion-fiesta-store.vercel.app/ratings')
    //         .then(Response => Response.json())
    //         .then(data => setRatings(data))
    // }, [])
    const {data: ratings = [], refetch, isLoading
    } = useQuery({
        queryKey: ['ratings'],
        queryFn: async() => {
           const res = await   fetch('https://fashion-fiesta-store.vercel.app/ratings')
        const data = await res.json()
        return data
    }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-10">Review On Us</h1>

            <div className='m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>


                {
                    ratings.map(ratin => <RatingsCard
                        key={ratin._id}
                        ratin={ratin}
                        refetch={refetch}
                        
                    ></RatingsCard>)
                }
                
            </div>
            <Rating
            refetch={refetch}
            ></Rating>
        </div>
    );
};

export default ShowRatings;