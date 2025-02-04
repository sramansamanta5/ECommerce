import React from 'react'
import { FaRegStarHalfStroke } from "react-icons/fa6";  //half
import { FaRegStar } from "react-icons/fa6";          //outlined(empty)
import { FaStar } from "react-icons/fa6";           //filled

const Ratings = ({rating,ratingtext}) => {
  return (
    <div className='flex flex-row items-center'>
      <span>
        {rating>=1?<FaStar fill='orange'/>:rating>=0.5?<FaRegStarHalfStroke fill='orange'/>:<FaRegStar/>}
      </span>
      <span>
        {rating>=2?<FaStar fill='orange'/>:rating>=1.5?<FaRegStarHalfStroke fill='orange'/>:<FaRegStar/>}
      </span>
      <span>
        {rating>=3?<FaStar fill='orange'/>:rating>=2.5?<FaRegStarHalfStroke fill='orange'/>:<FaRegStar/>}
      </span>
      <span>
        {rating>=4?<FaStar fill='orange'/>:rating>=3.5?<FaRegStarHalfStroke fill='orange'/>:<FaRegStar/>}
      </span>
      <span>
        {rating>=5?<FaStar fill='orange'/>:rating>=4.5?<FaRegStarHalfStroke fill='orange'/>:<FaRegStar/>}
      </span>
      <span className='mx-2'>
        ({ratingtext} Reviews)
      </span>
    </div>
  )
}

export default Ratings