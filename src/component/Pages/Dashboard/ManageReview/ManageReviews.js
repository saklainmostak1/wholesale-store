import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ShowReview from './ShowReview';

const ManageReviews = () => {
    const {data: allProducts = [],  isLoading
    } = useQuery({
        queryKey: ['allProducts'],
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
            <h2 className="text-5xl">You Have</h2>
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
        <th>price</th>
        <th>Rating</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody> 
    {
               allProducts.map(product => <ShowReview
               key={product._id}
               product={product}
               ></ShowReview>)
           }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageReviews;