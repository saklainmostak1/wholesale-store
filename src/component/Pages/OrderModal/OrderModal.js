import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const OrderModal = ({orderProducts, setOrderProducts, refetch}) => {
    const {user} = useContext(AuthContext)
    const {name, quantity, price, image} = orderProducts
    console.log(orderProducts)
    const handleOrder = event =>{
        event.preventDefault()
        const form = event.target
        const product = form.product.value
        const quantity = form.quantity.value
        const price = form.price.value
        const names = form.name.value
        const email = form.email.value
        const image = form.image.value
        const phone = form.phone.value
        console.log( quantity, names, email, phone, price, image);
        const order = {
            productName: product,
            name: names,
            quantity,
            price,
            email,
            phone,
            image  

        }
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
           })
           .then(Response => Response.json())
           .then(data => {
            console.log(data);
            if(data.acknowledged){
                setOrderProducts(null)
                form.reset('')
                refetch()
            toast.success('Order Confirmed')
           
            }
            else{
                toast.error(data.message)
            }
            
            // setOrderProducts('')
           })
       
    }

    
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name='product' type="text"  className="input w-full input-bordered " defaultValue={name} disabled/>
                    <input name='image' type="text"  className="input w-full input-bordered " defaultValue={image} disabled/>
                    <input name='price' type="text"  className="input w-full input-bordered " defaultValue={price} disabled/>
                    <select name='quantity' className="select select-bordered w-full">
                        
                       {
                          quantity.map((quantit , i) => <option
                            key={i}
                          value={quantit}
                          >{quantit}</option>)
                       }
                    </select>
                    <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" required />
                    <input name='email' type="email" placeholder="Email" defaultValue={user?.email} className="input w-full input-bordered" disabled/>
                    <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required/>
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default OrderModal;