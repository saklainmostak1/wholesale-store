import React from 'react';

const ShowPaymentsProducts = ({payment, i}) => {
    console.log(payment);
    const {image, email, price, productName, transactionId} = payment
    return (
        <tr>    
        <td>{i=1}</td>     
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
        <span className="badge badge-ghost">{productName}</span>          
    </td>
    <td> {email}</td>
    <td> {price}</td>
    <td>
        {transactionId}
    </td>
   
</tr>
    );
};

export default ShowPaymentsProducts;