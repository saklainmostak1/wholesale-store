import React from 'react';

const MyReviewTable = ({myReview, i}) => {
    console.log(myReview);
    const {name, email, rating, text, photo} = myReview
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
    <td><button className='btn btn-accent btn-xs'>Update</button></td>
    <td><button className='btn btn-warning btn-xs'>Delete</button></td>
</tr>
    );
};

export default MyReviewTable;