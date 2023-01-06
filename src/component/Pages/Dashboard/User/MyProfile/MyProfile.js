import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const { data: myProfile = [], isLoading
    } = useQuery({
        queryKey: ['myProfile'],
        queryFn: async () => {
            const res = await fetch(`https://fashion-fiesta-store.vercel.app/users?email=${user?.email}`)
            const data = await res.json()
            return data

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    // https://fashion-fiesta-store.vercel.app/users?email=abcd@gmail.com

    return (
        <div className='mt-48 grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1'>
            <h2 className='text-4xl text-center'>User Profile</h2>
            {
                myProfile.map(profile =>
                    

                    <div className="card  m-10 bg-gray-400 shadow-xl">
                        <figure className="px-10 pt-10">
                            <div className="avatar">
                                <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={profile?.photo} alt=''/>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name : {profile?.name}</h2>
                            <p className='mt-5 text-xl'>Email : {profile?.email}</p>
                            <p className='mt-5 text-xl'>Role : {profile?.role}</p>
                            <div className="card-actions">
                               <Link to={`/dashboard/update/${profile._id}`}>
                               <button className=" mt-5 btn btn-primary btn-xs">Edit Profile</button>
                               </Link>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default MyProfile;