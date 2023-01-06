import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ShowReportedProducts from './ShowReportedProducts';

const ReportedProducts = () => {
    const {data: reportProducts = [],  isLoading, refetch
    } = useQuery({
        queryKey: ['reportProducts'],
        queryFn: async() => {
           const res = await   fetch('https://fashion-fiesta-store.vercel.app/report')
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
          fetch(`https://fashion-fiesta-store.vercel.app/report/${id}`, {
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
        <h2 className="text-5xl mt-10 mb-10 text-center">Reported Products</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
  
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Products Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                reportProducts.map((report, i) => <ShowReportedProducts
                  key={report._id}
                  report={report}
                  i={i}
                  handleDelete={handleDelete}
                ></ShowReportedProducts>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ReportedProducts;