import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Product from '../components/Product.jsx'


const Products = () => {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    const fetchProducts=async()=>{
     const {data}= await axios.get('http://localhost:4000/api/products')
     setProducts(data)
    }
    fetchProducts()
  },[])
  return (
 <div className='grid grid-cols-3 gap-2 '>
        {products.map((product)=>{
            return <Product product={product} key={product._id} />
        })}
    </div>
    
  )
}

export default Products