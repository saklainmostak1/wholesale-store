import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ShowMessage from './ShowMessage';

const ContactMessage = () => {
    const {data: contacts = [],  isLoading
    } = useQuery({
        queryKey: ['contacts'],
        queryFn: async() => {
           const res = await   fetch('http://localhost:5000/contact')
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
    <th>Message</th>
  </tr>
</thead>
<tbody> 
{
           contacts.map(contact => <ShowMessage
           key={contact._id}
           contact={contact}
           ></ShowMessage>)
       }
</tbody>
</table>
</div>
    </div>
    );
};

export default ContactMessage;