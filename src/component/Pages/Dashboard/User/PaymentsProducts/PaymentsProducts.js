import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';
import ShowPaymentsProducts from './ShowPaymentsProducts';

const PaymentsProducts = () => {

    // 
    const {data: payments = [], refetch, isLoading
    } = useQuery({
        queryKey: ['payments'],
        queryFn: async() => {
           const res = await   fetch('http://localhost:5000/payment', {
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
    return (
        <div>
            <h2 className='text-3xl mb-5 mt-10 text-center'>Paid Products</h2>
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
    <th>Products Image</th>
    <th>Products Name</th>
    <th>User email</th>
    <th>Price</th>
    <th>transactionId</th>
  </tr>
</thead>
<tbody> 
{
         payments &&
         payments?.map((payment, i) => <ShowPaymentsProducts
         key={payment._id}
         i={i}
         payment={payment}
         refetch={refetch}
         ></ShowPaymentsProducts>)
       }
</tbody>
</table>
</div>
    </div>
        </div>
    );
};

export default PaymentsProducts;