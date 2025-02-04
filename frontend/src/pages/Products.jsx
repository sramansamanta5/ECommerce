import React from 'react'
import products from '../products.js'
import Product from '../components/Product.jsx'


const Products = () => {
  return (
 <div className='grid grid-cols-3 gap-2 '>
        {products.map((product)=>{
            return <Product product={product} key={product._id} />
        })}
    </div>
    
  )
}

export default Products