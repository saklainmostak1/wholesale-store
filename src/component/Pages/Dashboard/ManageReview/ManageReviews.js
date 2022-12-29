import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ShowReview from './ShowReview';

const ManageReviews = () => {
    const {data: reviews = [],  isLoading, refetch
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
    const handleDelete = id =>{
      const proceed = window.confirm('Are You Sure delete')
          
         if(proceed){
          fetch(`http://localhost:5000/ratings/${id}`, {
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
               handleDelete={handleDelete}
               ></ShowReview>)
           }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageReviews;