import React from 'react';

const ShowReportedProducts = ({report}) => {
    const {name, email, products, description} = report
    console.log(report);
    return (
        <tr>
           
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    {/* <div className="mask mask-squircle w-12 h-12">
                        <img src='' alt="" />
                    </div> */}
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
        <button className='btn btn-xs'>Delete</button>
        </td>

    </tr>
    );
};

export default ShowReportedProducts;