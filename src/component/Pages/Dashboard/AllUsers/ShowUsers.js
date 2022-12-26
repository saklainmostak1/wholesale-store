import React from 'react';

const ShowUsers = ({users}) => {
    console.log(users)
    const {name, email, photo} = users

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
        <td>
        <button className='btn btn-accent btn-xs'>Make Admin</button>
        </td>
        <td>
        <button className='btn btn-warning btn-xs'>Delete</button>
        </td>
    </tr>
    );
};

export default ShowUsers;