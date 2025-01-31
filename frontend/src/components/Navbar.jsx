import React from 'react'
import { useState } from 'react';
import { FaShopify } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
   
    const[nav,setNav]=useState(false)

  return (
   <div className='text-white h-24 flex flex-row justify-between items-center px-4 bg-black'>
        {/*<Link to='/'>*/}
        <div className='flex  items-center'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>E-Shop</h1> 
        <FaShopify size={35} fill='orange'/> 
        </div>
        {/*</Link>*/}
        <ul className='hidden md:flex'>
            <li className='p-4 flex items-center hover:border-b-2 border-[#00df9a] cursor-pointer'>
                <div>Cart</div>
                <FaShoppingCart size={30} fill='white'/>
            </li>
            <li className='p-4 flex items-center hover:border-b-2 border-[#00df9a] cursor-pointer'>
            <div>Sign in</div>
                <FaUser size={30} fill='white'/>
            </li>
        </ul>
        <div onClick={()=>setNav(!nav)} className='block fixed right-4 md:hidden'>
          {nav?<ImCross size={25} fill='red'/>:<VscThreeBars fill='orange' size={25}/>}
        </div>
    <div className={nav?'fixed left-0 top-0 w-[40%] border-r border-gray-500 h-full bg-gray-500 ease-in duration-700':'fixed right-[100%]'}>                        
        <div className='mx-5 my-7 flex  items-center'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>E-Shop</h1> 
        <FaShopify size={35} fill='orange'/> 
        </div>
           <ul className='my-12'>
              <li className='p-4  flex items-center border-b border-white '>
              <div>Cart</div>
                <FaShoppingCart size={30} fill='white'/>
              </li>
              <li className='p-4 flex items-center'>
              <div>Sign in</div>
                <FaUser size={30} fill='white'/>
              </li>
          </ul>
    </div>
   </div>
  )
}

export default Navbar