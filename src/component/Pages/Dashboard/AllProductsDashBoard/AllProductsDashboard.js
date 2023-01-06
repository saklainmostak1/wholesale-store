import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ProductShow from './ProductShow';

const AllProductsDashboard = () => {
  const { data: allProducts = [], isLoading, refetch
  } = useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      const res = await fetch('https://fashion-fiesta-store.vercel.app/allProducts')
      const data = await res.json()
      return data
    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }
  const handleDelete = id =>{
    const proceed = window.confirm('Are You Sure delete')
        
       if(proceed){
        fetch(`https://fashion-fiesta-store.vercel.app/allProducts/${id}`, {
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
      <h2 className="text-5xl mt-10 mb-10 text-center">You Have {allProducts.length} products</h2>
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
              allProducts.map(product => <ProductShow
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              ></ProductShow>)
            }
          </tbody>
        </table>
      </div>
    </div>



  );
};

export default AllProductsDashboard;