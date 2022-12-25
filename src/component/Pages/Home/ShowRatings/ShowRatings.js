import React, { useEffect, useState } from 'react';
import RatingsCard from './RatingsCard';

const ShowRatings = () => {
    const [ratings, setRatings] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/ratings')
            .then(Response => Response.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-10">Rating On Us</h1>

            <div className='m-5 grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>


                {
                    ratings.map(ratin => <RatingsCard
                        key={ratin._id}
                        ratin={ratin}

                    ></RatingsCard>)
                }
            </div>
        </div>
    );
};

export default ShowRatings;