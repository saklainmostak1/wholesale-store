import React from 'react';
import { toast } from 'react-hot-toast';

const ShowUsers = ({users, refetch,i, handleDelete}) => {
    console.log(users)
    const {name, email, photo, _id, role} = users
    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('SuccessFully Make Admin')
                refetch()
            }
        })
    }

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
            <span className="badge badge-ghost">{name}</span>          
        </td>
        <td> {email}</td>
        <td>{role}</td>
        <td>
            {
                users?.role !== 'admin' &&
                <button onClick={() => handleMakeAdmin(_id)} className='btn btn-accent btn-xs'>Make Admin</button>
            }
        </td>
        <td>
        <button onClick={() => handleDelete(_id)} className='btn btn-warning btn-xs'>Delete</button>
        </td>
    </tr>
    );
};

export default ShowUsers;