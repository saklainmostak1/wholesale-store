import React from 'react';

const RatingsCard = ({ratin}) => {
    const {name, email, rating, message} = ratin
    console.log(ratin);
    return (
        <div>
            <div className="card bg-emerald-100 shadow-xl">
                <div className="card-body text-center ">
                    <h2 className="text-center text-3xl font-bold">{name}</h2>
                        <p className='text-xl'>{email}</p>
                        <p className='text-xl'>Rating: {rating}</p>
                        <p className='text-xl'>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default RatingsCard;