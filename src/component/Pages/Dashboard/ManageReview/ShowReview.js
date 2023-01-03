import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ShowReview = ({review, handleDelete}) => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const {name, rating, message, email, _id, photo} = review
    console.log(review);
    return (
        <tr>         
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
        <td> {rating}<FaStar className='text-orange-300'></FaStar> </td>
        <td>
            <p>{message}</p>
        </td>
        <td>
        <button onClick={() => handleDelete(_id)} className='btn btn-warning btn-xs'>Delete</button>
        </td>
    </tr>
    );
};

export default ShowReview;