import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Product from '../components/Product.jsx'
import { useGetProductsQuery } from '../slices/productApiSlice.js'


const Products = () => {

 const{data:products,isLoading,isError}=useGetProductsQuery()

  return (
    <>
    {isLoading? ( <h1>Loading....</h1>):isError?(<div>{isError.data?.message || isError.error}</div>):( <div className='grid grid-cols-3 gap-2 '>
        {products.map((product)=>{
            return <Product product={product} key={product._id} />
        })}
    </div>)}
    </>
  )
}

export default Products