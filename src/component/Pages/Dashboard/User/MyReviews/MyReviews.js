import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import MyReviewTable from './MyReviewTable';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    
    const { data: myReviewss = [], isLoading, refetch
    } = useQuery({
        queryKey: ['myReviewss'],
        queryFn: async () => {
            const res = await fetch(`https://fashion-fiesta-store.vercel.app/allReviews?email=${user.email}`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure delete')
            
           if(proceed){
            fetch(`https://fashion-fiesta-store.vercel.app/allReviews/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(Response => Response.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('Delete Successfully')
                }
               
            })
           }
    }

    return (
        <div>
            <h1 className='text-3xl mt-10 mb-10 text-center'>My Review On Products</h1>
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
                            <th>Products Name</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Text</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviewss.map((myReview, i) => <MyReviewTable
                                key={myReview._id}
                                myReview={myReview}
                                refetch={refetch}
                                i={i}
                                handleDelete={handleDelete}
                            ></MyReviewTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;