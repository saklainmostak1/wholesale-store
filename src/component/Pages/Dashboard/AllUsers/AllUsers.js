import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
           ></ShowUsers>)
       }
</tbody>
</table>
</div>
    </div>
    );
};

export default AllUsers;