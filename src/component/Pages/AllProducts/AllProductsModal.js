import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const AllProductsModal = ({orderProducts, setOrderProducts, refetch}) => {
    const {name,  price, image, _id} = orderProducts
    const {user} = useContext(AuthContext)
    const handleOrder = event =>{
        event.preventDefault()
        const form = event.target
        const product = form.product.value
        // const quantity = form.quantity.value
        const price = form.price.value
        const names = form.name.value
        const email = form.email.value
        const image = form.image.value
        const phone = form.phone.value
        const order = {
            // OrderId: _id,
            productName: product,
            name: names,
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
                toast.success('Order Confirmed')
                refetch()
           
            }
            
         
           })
        }     
    return (
        <>
        <input type="checkbox" id="order-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 mt-10'>
                    <input name='product' type="text" 
                    defaultValue={name}
                    className="input w-full input-bordered "  disabled/>
                    <input name='image' type="text" 
                    defaultValue={image}
                    className="input w-full input-bordered "  disabled/>
                    <input name='price' type="text" 
                    defaultValue={price}
                    className="input w-full input-bordered "  disabled/>
                    {/* <select name='quantity' className="select select-bordered w-full">
                        
                       {
                          quantity.map((quantit , i) => <option
                            key={i}
                          value={quantit}
                          >{quantit}</option>)
                       }
                    </select> */}
                    <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" required />
                    <input name='email' type="email" placeholder="Email" className="input w-full input-bordered" defaultValue={user?.email} disabled/>
                    <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required/>
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default AllProductsModal;