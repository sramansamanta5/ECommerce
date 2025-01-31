import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center h-16 p-4 w-full bg-gray-700 text-[#00df9a]'>
         Back to the top
      </div>
      <div className='flex justify-center '>
       <div className='p-2 w-full bg-gray-900 grid grid-cols-4 gap-3  text-[#eff3f2]'>
         <h1 className='flex justify-center cursor-pointer'>Get To Know us</h1>
         <h1 className='flex justify-center cursor-pointer'>Connect With Us</h1>
         <h1 className='flex justify-center cursor-pointer'>Make money With Us</h1>
         <h1 className='flex justify-center cursor-pointer'>Let Us Help you</h1>
         
         <h1 className='flex justify-center cursor-pointer'>About us</h1>
         <h1 className='flex justify-center cursor-pointer'><FaFacebook fill='blue'size={20}/> Facebook</h1>
         <h1 className='flex justify-center cursor-pointer'>Sell on E-Shop</h1>
         <h1 className='flex justify-center cursor-pointer'>Help</h1>

         <h1 className='flex justify-center cursor-pointer'>Careers</h1>
         <h1 className='flex justify-center cursor-pointer'><FaTwitter fill='skyblue' size={20}/> Twitter</h1>
         <h1 className='flex justify-center cursor-pointer'>Advertise</h1>
         <h1 className='flex justify-center cursor-pointer'>Return products</h1>
       </div>
      </div>
      <div className='bg-black flex flex-row gap-2 justify-center h-16 p-3 w-full  text-[#eff3f2]'>
                <div><FaCopyright size={20}/></div>
                <h1>EShop.com</h1>
         </div>
    </div>
  )
}

export default Footer