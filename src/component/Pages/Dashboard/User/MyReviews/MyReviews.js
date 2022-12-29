import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import MyReviewTable from './MyReviewTable';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    
    const { data: myReviewss = [], isLoading, refetch
    } = useQuery({
        queryKey: ['myReviewss'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allReviews?email=${user.email}`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
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
                                
                            ></MyReviewTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;