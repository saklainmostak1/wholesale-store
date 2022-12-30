import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const RatingsCard = ({ ratin }) => {
    const { user } = useContext(AuthContext)
    const { name, email, rating, message, photo } = ratin
    console.log(ratin);
    return (
        <div>
            <div className="card  m-10 bg-emerald-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photo} alt='' />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name : {name}</h2>
                    <p className='mt-5 text-xl'>Email : <br /> {email}</p>
                    <div className="card-actions">
                        <p>Rating: {rating} </p>
                        <p className='text-orange-300 mt-1'><FaStar></FaStar></p>
                    </div>
                    <p >{message}</p>
                </div>
            </div>
        </div>
    );
};

export default RatingsCard;