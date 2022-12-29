import React from 'react';

const GetReviewTable = ({productsReview, i}) => {
    console.log(productsReview)
    const {email, name, rating, text, photo} = productsReview
    return (
        <tr>      
            <td>{i+1}</td>   
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
        </td>
        <td>
            <span className="badge badge-ghost">{name}</span>          
        </td>
        <td> {email}</td>
        <td>{rating}</td>
        <td>
            {text}
        </td>
    </tr>
    );
};

export default GetReviewTable;