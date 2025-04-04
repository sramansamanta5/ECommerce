import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from '../slices/cartSlice';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress) {
      navigate('/shippingpage');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted with payment method:', paymentMethod);
    
    try {
      // Dispatch action in try/catch to catch any errors
      dispatch(savePaymentMethod(paymentMethod));
      console.log('Payment method saved successfully');
      
      // Add a small delay before navigation to ensure the state is updated
      setTimeout(() => {
        console.log('Navigating to /placeorder');
        navigate('/placeorder');
      }, 1000);
    } catch (error) {
      console.error('Error during payment submission:', error);
    }
  };

  // Add a direct navigation function for testing
  const directNavigate = () => {
    console.log('Attempting direct navigation');
    navigate('/placeorder');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Select a Payment Method</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <input
            type="radio"
            id="cashOnDelivery"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        </div>
        <div className="mb-6">
          <input
            type="radio"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            checked={paymentMethod === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="PayPal">PayPal</label>
        </div>
        <button 
          type="submit" 
          className="bg-green-600 text-white font-semibold p-2 rounded-lg mb-4"
        >
          Continue to Order Review
        </button>
      </form>
      
      {/* Test button that bypasses redux */}
      <button 
        onClick={directNavigate}
        className="bg-blue-500 text-white font-semibold p-2 rounded-lg"
      >
        Test Direct Navigation
      </button>
      
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p>Debug Info:</p>
        <p>Payment Method: {paymentMethod}</p>
        <p>Has Shipping Address: {shippingAddress ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default PaymentPage;




























{/*
  import React from 'react'
import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { savePaymentMethod } from '../slices/cartSlice'


const PaymentPage = () => {
    const [paymentMethod,setPaymentMethod]=useState('PayPal')
    
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const cart=useSelector((state)=>state.cart)
    const {shippingAddress}=cart

    useEffect(()=>{
        if(!shippingAddress){
            navigate('/shippingpage')
        }
    },[shippingAddress,navigate])
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

  return (
    <div>
        <h1>Select A payment Method</h1>
        <form>
        <div>
          <input
            type="radio"
            id="cashOnDelivery"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e)=>setPaymentMethod(e.target.value)}
          />
          <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        </div>

        <div>
          <input
            type="radio"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            checked={paymentMethod === 'PayPal'}
            onChange={(e)=>setPaymentMethod(e.target.value)}
          />
          <label htmlFor="PayPal">PayPal</label>
        </div>
      </form>
      <button onClick={submitHandler} className='bg-green-600 text-white font-semibold p-2 rounded-lg'>Place Order</button>
    </div>
  )
}

export default PaymentPage
  
  
  
  */}
     


{/*
  
    import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from '../slices/cartSlice';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  
  useEffect(() => {
    if (!shippingAddress || Object.keys(shippingAddress).length === 0) {
      navigate('/shippingpage');
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    console.log("Updated Redux State:", cart);  // Check if Redux updates properly
    navigate('/placeorder');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-semibold mb-4">Select a Payment Method</h1>
      
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cod"
            checked={paymentMethod === 'cod'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="cod" className="ml-2">Cash on Delivery</label>
        </div>

        <div className="mb-3">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="paypal" className="ml-2">PayPal</label>
        </div>

        <button 
          type="submit" 
          className="bg-green-600 text-white font-semibold p-2 rounded-lg w-full hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;

  
  */}

 