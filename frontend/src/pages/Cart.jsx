import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa6'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart } from '../slices/cartSlice'

const Cart = () => {

   const navigate=useNavigate()

   const dispatch=useDispatch()

   const cart=useSelector((state)=> state.cart)

   const {cartItems}=cart;

   const removeFromCartHandler=async(id)=>{
     dispatch(removeFromCart(id))
   }
  
   const checkOutHandler=()=>{
     navigate('/login?redirect=/shippingpage');
   }
   
  return (
    <div className='m-5 '>
        <h1>Shopping Cart</h1>
        <div className=' grid grid-cols-2 '>
            {console.log(cart)}
            {cartItems.length===0?(<h1>Your Cart is Empty.</h1>):<div>
                  {cartItems.map((item)=>{
                    return <div className='flex flex-row gap-3 justify-center items-center rounded-lg' key={item._id}>
                        <img src={item.image} className='h-32 w-32 object-contain'/>
                        <h3>{item.name}</h3>
                        <h2>{item.price}</h2>
                        <h2>{item.quantity}</h2>
                        <button className='bg-red-500 text-white  rounded-lg w-16 h-8' onClick={()=>removeFromCartHandler(item._id)}>Delete</button>
                    </div>
                  })}
                </div>}
          <div className='flex flex-col justify-center items-center'>
             <h1>Total -- {cartItems.length>0?cart.totalPrice:0}</h1>  
            <button className='bg-orange-500 text-white p-3' onClick={checkOutHandler}>Proceed TO Checkout</button>
          </div>
        </div>
    </div>
  )
}

export default Cart