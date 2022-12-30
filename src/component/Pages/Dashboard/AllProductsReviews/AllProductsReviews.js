import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ReviewAllProducts from './ReviewAllProducts';

const AllProductsReviews = () => {
    const {data: productsRatings = [],  isLoading, refetch
    } = useQuery({
        queryKey: ['productsRatings'],
        queryFn: async() => {
           const res = await   fetch('http://localhost:5000/productsRatings')
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
            fetch(`http://localhost:5000/productsRatings/${id}`, {
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
        <h2 className="text-5xl mb-10 mt-10 text-center">All Products Reviews</h2>
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
    <th>Product Name</th>
    <th>User Email</th>
    <th>Review Text</th>
    <th>Rating</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody> 
{
           productsRatings.map((productsRating, i) => <ReviewAllProducts
           key={productsRating._id}
           productsRating={productsRating}
           i={i}
           refetch={refetch}
           handleDelete={handleDelete}
           ></ReviewAllProducts>)
       }
</tbody>
</table>
</div>
    </div>
    );
};

export default AllProductsReviews;