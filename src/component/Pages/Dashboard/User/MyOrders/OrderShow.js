import React from 'react';

const OrderShow = ({order, i}) => {
    console.log(order);
    const {name, productName, price, image} = order
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
        <button className='btn btn-warning btn-xs'>Delete</button>
        </td>
        <td>
        <button className='btn btn-accent btn-xs'>PAY</button>
        </td>
    </tr>
    );
};

export default OrderShow;