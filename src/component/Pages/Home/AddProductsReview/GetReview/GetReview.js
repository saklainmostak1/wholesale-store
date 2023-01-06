import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import GetReviewTable from './GetReviewTable';

const GetReview = ({ productsDetailss }) => {
    const { name, _id } = productsDetailss
    console.log(productsDetailss._id);

    const { data: productsReviewss = [], isLoading, refetch
    } = useQuery({
        queryKey: ['productsReviewss'],
        queryFn: async () => {
            const res = await fetch(`https://fashion-fiesta-store.vercel.app/productReviews?products=${_id}`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
   
    return (


        <div>
            <h2 className='text-4xl text-center mb-10'>All Review Of {name}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productsReviewss.map((productsReview, i) => <GetReviewTable
                                key={productsReview._id}
                                productsReview={productsReview}
                                refetch={refetch}
                                i={i}
                                
                            ></GetReviewTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default GetReview;