import React from 'react';

const Card = ({ data }) => {
    const { name, description, img } = data
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <p>{description}</p>
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;