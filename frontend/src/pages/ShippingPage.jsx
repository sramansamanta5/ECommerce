import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingAddress } from '../slices/cartSlice'
import Navbar from '../components/Navbar'

const ShippingPage = () => {

    const cart=useSelector((state)=>state.cart)
    const {shippingAddress}=cart

   
    const [address,setAddress]=useState(shippingAddress?.address || '')
    const [city,setCity]=useState('')
    const [postalCode,setPostalCode]=useState('')
    const [country,setCountry]=useState('')
    
    const navigate =useNavigate();
    const dispatch=useDispatch();

   

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode,country}))
        navigate('/paymentpage')
       // console.log('Submit')
    }

  return (
    <>
    <Navbar/>
    <div className="m-5 flex flex-col justify-center items-center gap-2">
     <h1 className="text-3xl font-bold text-orange-500">Shipping Address</h1>

      <h1 className="text-2xl font-semibold">Enter Address:</h1>
      <input
        type="text"
        placeholder="Type address here..."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <h1 className="text-2xl font-semibold">Enter City:</h1>
      <input
        type="text"
        placeholder="Type city here..."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />


      <h1 className="text-2xl font-semibold">Enter Postalcode:</h1>
      <input
        type="text"
        placeholder="Type postalcode here..."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />

      <h1 className="text-2xl font-semibold">Enter Country:</h1>
      <input
        type="text"
        placeholder="Enter your Country .."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

       <button
        className="bg-green-600 text-white p-3 rounded-lg cursor-pointer"
        onClick={submitHandler}
      >
       Continue
      </button>


    </div>
    </>
  )
}

export default ShippingPage