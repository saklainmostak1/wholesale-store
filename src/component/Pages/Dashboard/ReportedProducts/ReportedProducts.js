import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ShowReportedProducts from './ShowReportedProducts';

const ReportedProducts = () => {
    const {data: reportProducts = [],  isLoading
    } = useQuery({
        queryKey: ['reportProducts'],
        queryFn: async() => {
           const res = await   fetch('http://localhost:5000/report')
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
                ></ShowReportedProducts>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ReportedProducts;