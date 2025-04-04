import React from 'react'
import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useCreateOrderMutation } from '../slices/ordersApiSlice'
import { clearCartItems } from '../slices/cartSlice'

const PlaceOrder = () => {

    const navigate=useNavigate();
    
    const cart=useSelector((state)=>state.cart)

   
     useEffect(()=>{
     if(!cart.shippingAddress.address){
       navigate('/shippingpage');
     } else if(!cart.paymentMethod){
       navigate('/paymentpage')
     }
    },[cart.shippingAddress.address,cart.paymentMethod,navigate])
    
    
  
    const dispatch=useDispatch();
    const [createOrder,{isLoading,error}]=useCreateOrderMutation()

    const placeOrderHandler=async(e)=>{
      e.preventDefault();
       try {
        const res = await createOrder({
          orderItems:cart.cartItems,
          shippingAddress:cart.shippingAddress,
          paymentMethod:cart.paymentMethod,
          itemsPrice:cart.itemsPrice,
          shippingPrice:cart.shippingPrice,
          taxPrice:cart.taxPrice,
          totalPrice:cart.totalPrice
        }).unwrap();
        dispatch(clearCartItems())
        navigate(`/order/${res._id}`)
       // console.log(res)
       } catch (error) {
         console.log(error)
       }
    }

  return (
    <div className='flex flex-col-2 gap-2 justify-center items-center'>
      <div className='w-2/3 m-1'>
        <h1>Shipping -</h1>
          <p>Address: {cart.shippingAddress.address},{cart.shippingAddress.city},{cart.shippingAddress.postalCode},{cart.shippingAddress.country}</p>
        <h1>Payment via - </h1>
          <p>Method: {cart.paymentMethod}</p>
        <h1>Order Items -</h1>
            {cart.cartItems.length === 0 ? (
              <p>Your Cart is Empty</p>
            ) : (
              <div>
                {cart.cartItems.map((item, index) => (
                  <div key={index}>
                    <img src={item.image} alt={item.name} />
                    <Link to={`/products/${item.product}`}> <h2>{item.name}</h2></Link>
                    {/*<h3>{item*quantity}* ${item.price} = ${item.quantity*item.price} </h3>*/}
                  </div>
                ))}
              </div>
            )}
        </div>
        <div className='w-1/3 m-1 '>
          <div className='p-3 border-solid border-green-800 border-2 rounded-lg'>
            <h1 className=''>Order Summary</h1>
            <div>{cart.itemsPrice}</div>
            <div>{cart.shippingPrice}</div>
            <div>{cart.taxPrice}</div>
            <div>Total:{cart.totalPrice}</div>
            <button disabled={cart.cartItems.length === 0} onClick={placeOrderHandler} className='p-2 bg-yellow-600 text-white font-semibold'>Place Order</button>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder