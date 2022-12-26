import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const { name, description, img } = data
    return (
        <div className=''>
            <div className="card card-side bg-red-200 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <p>{description}</p>
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-xs underline">Coming Soon....</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;