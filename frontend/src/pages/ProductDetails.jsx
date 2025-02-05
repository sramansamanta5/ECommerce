import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Ratings from '../components/Ratings.jsx';
import { IoMdArrowRoundBack } from "react-icons/io";


const ProductDetails = () => {


   const {id:productID}=useParams()
   const navigate=useNavigate()
    const [product,setProduct]=useState([])

    useEffect(()=>{
      const fetchProduct=async()=>{
       const {data}= await axios.get(`http://localhost:4000/api/products/${productID}`)
       setProduct(data)
      }
      fetchProduct()
    },[productID])
    
  return (
    <div>
    <button className='m-3 p-3 rounded-full bg-black' onClick={()=>navigate(-1)}><IoMdArrowRoundBack size={35} fill='#00df9a'/></button>
     {console.log(product)}
    <img src={product.image} className='m-5 w-80 h-80 object-cover'/>
    <h1 className='font-bold text-2xl m-2'>{product.name}</h1>
    <div className=' border-black border-t-2 border-b-2 m-2 p-4 '><Ratings rating={product.rating} ratingtext={product.numReviews}/></div>
    <div className='border-black border-b-2 p-4'>${product.price}</div>
    <div className='border-black border-b-2 p-4'>{product.description}</div>
    <div className='m-2 p-2 w-1/4 flex flex-col border-2 border-white bg-white shadow-2xl justify-center items-center rounded-lg hover:scale-110 duration-300 md:relative left-96 bottom-96'>
      <h1>Price :   ${product.price}</h1>
      <h1 className='' style={product.countInStock===0?{color:'red'}:{color:'black'}}>Status :  {product.countInStock} items left</h1>
      <button className='p-3 bg-black text-[#00df9a] rounded-lg hover:bg-[#00df9a] hover:text-black font-semibold '>Add To Cart</button>
    </div>
  </div>
  )
}

export default ProductDetails