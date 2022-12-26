import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductShow = ({ product }) => {
    const {name, image, price , rating} = product
    console.log(product)
    return (
        <tr>
           
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span className="badge badge-ghost">{name}</span>
                
            </td>
            <td>{price} TK</td>
            <td>{rating} <FaStar className='text-orange-300'></FaStar> </td>
            <td>
                <button className='btn btn-xs'>Delete</button>
            </td>
            <td>
            <button className='btn btn-xs'>Update</button>
            </td>

        </tr>
    );
};

export default ProductShow;