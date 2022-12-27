import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ShowReview from './ShowReview';

const ManageReviews = () => {
    const {data: reviews = [],  isLoading
    } = useQuery({
        queryKey: ['reviews'],
        queryFn: async() => {
           const res = await   fetch('http://localhost:5000/ratings')
        const data = await res.json()
        return data
    }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-5xl mb-5">Website Reviews</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Rating</th>
        <th>Review Text</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody> 
    {
               reviews.map(review => <ShowReview
               key={review._id}
               review={review}
               ></ShowReview>)
           }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageReviews;