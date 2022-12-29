import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    const {data: useres = [],  isLoading,
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
                 <h2 className='text-center text-green-600 mt-96 font-bold text-6xl'>Welcome  to dashboard</h2>
               
           
        </div>
    );
};

export default Dashboard;