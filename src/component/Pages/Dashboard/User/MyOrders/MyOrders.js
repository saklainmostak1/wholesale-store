import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import OrderShow from './OrderShow';


const MyOrders = () => {
  
  const {user} = useContext(AuthContext)
  
  
    const {data: orders = [], refetch, isLoading
    } = useQuery({
        queryKey: ['orders'],
        queryFn: async() => {
           const res = await   fetch(`https://fashion-fiesta-store.vercel.app/orders?email=${user?.email}`, {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
           })
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
          fetch(`https://fashion-fiesta-store.vercel.app/orders/${id}`, {
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
        <h2 className="text-5xl mb-5 text-center">My Orders</h2>
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
    <th>User Name</th>
    <th>Products Name</th>
    <th>Price</th>
    <th>Delete</th>
    <th>Payments</th>
  </tr>
</thead>
<tbody> 
{
         orders &&
         orders?.map((order, i) => <OrderShow
         key={order._id}
         i={i}
         order={order}
         refetch={refetch}
         handleDelete={handleDelete}
         ></OrderShow>)
       }
</tbody>
</table>
</div>
    </div>
    );
};

export default MyOrders;