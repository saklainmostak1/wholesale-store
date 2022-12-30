import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const { data: users = [], isLoading
    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`)
            const data = await res.json()
            return data

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
      <div>
               
                 <div className='mt-96 grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1'>
            {
                users.map(profile =>

                    <div >
                         <h2 className='text-center text-green-600 font-bold text-6xl'>Welcome to {profile.role}  dashboard</h2>
                    </div>

                )
            }

        </div> 
               
           
        </div>
    );
};

export default Dashboard;