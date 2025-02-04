import React from 'react'
import Ratings from './Ratings'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className='flex flex-col gap-2 justify-center items-center rounded-lg p-2'>
      <Link to={`/productdetails/${product._id}`}>
      <img src={product.image} className='object-cover w-96 h-80'/>
      <h1>{product.name}</h1>
      <Ratings rating={product.rating} ratingtext={product.numReviews}/>
      <h2>{product.price}</h2>
      </Link>
    </div>
  )
}

export default Product