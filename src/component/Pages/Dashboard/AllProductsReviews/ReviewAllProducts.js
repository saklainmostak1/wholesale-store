import React from 'react';

const ReviewAllProducts = ({productsRating, i, handleDelete}) => {
    console.log(productsRating );
    const {photo, productName, name, text, rating, _id} = productsRating
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
        <span className="badge badge-ghost">{productName}</span>          
    </td>
    <td> {name}</td>
    <td>{text}</td>
    <td>{rating}</td>
    <td>
        <button onClick={() => handleDelete(_id)} className='btn btn-warning btn-xs'>Delete</button>
    </td>
    
</tr>
    );
};

export default ReviewAllProducts;