import React from 'react';


const ShowMessage = ({contact}) => {
    const {name, email,description } = contact
    console.log(contact);
    return (
        <tr>         
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    {/* <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="" />
                    </div> */}
                </div>
            </div>
        </td>
        <td>
            <span className="badge badge-ghost">{name}</span>          
        </td>
        <td> {email}</td>
        
        <td>
            <p>{description}</p>
        </td>
    </tr>
    );
};

export default ShowMessage;