import React from 'react';

const ShowReportedProducts = ({report, i, handleDelete}) => {
    const {name, email, products, description, image, _id} = report
    console.log(report);
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
            <span className="badge badge-ghost">{products}</span>
            
        </td>
        <td>{name}</td>
        <td>{email}  </td>
        <td>
            <p>{description}</p>
        </td>
        <td>
        <button onClick={() => handleDelete(_id)} className='btn btn-warning btn-xs'>Delete</button>
        </td>

    </tr>
    );
};

export default ShowReportedProducts;