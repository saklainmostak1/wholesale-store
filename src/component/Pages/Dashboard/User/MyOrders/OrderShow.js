import React from 'react';
import { Link } from 'react-router-dom';

const OrderShow = ({order, i, handleDelete}) => {
    console.log(order);
    const {name, productName, price, image, _id} = order
  
    
    return (
        <tr>    
            <td>{i+1}</td>     
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
        <td> {productName}</td>
        <td> {price}</td>
        <td>
        <button onClick={() => handleDelete(_id)} className='btn btn-warning btn-xs'>Delete</button>
        </td>
        <td>
         {
            order.price && !order.paid &&
            <Link to={`/dashboard/payments/${_id}`}>
            <button className='btn btn-accent btn-xs'>PAY</button>
            </Link>
         }

         {
             order.price && order.paid &&
             <span className='text-primary'>Paid</span>
         }
        </td>
    </tr>
    );
};

export default OrderShow;