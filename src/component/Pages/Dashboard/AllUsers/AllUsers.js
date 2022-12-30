import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ShowUsers from './ShowUsers';

const AllUsers = () => {
    const {data: useres = [],  isLoading, refetch
    } = useQuery({
        queryKey: ['useres'],
        queryFn: async() => {
           const res = await   fetch('http://localhost:5000/users')
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
          fetch(`http://localhost:5000/users/${id}`, {
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
        <h2 className="text-5xl text-center mb-10 mt-10">All Users</h2>
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
    <th>Type</th>
    <th>Make Admin</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody> 
{
           useres.map((users, i) => <ShowUsers
           key={users._id}
           users={users}
           i={i}
           refetch={refetch}
           handleDelete={handleDelete}
           ></ShowUsers>)
       }
</tbody>
</table>
</div>
    </div>
    );
};

export default AllUsers;