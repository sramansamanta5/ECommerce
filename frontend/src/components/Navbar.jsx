import React from 'react'
import { useState } from 'react';
import { FaShopify } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
   
    const[nav,setNav]=useState(false)

   const {cartItems}=useSelector((state)=>state.cart)
   const {userInfo}=useSelector((state)=>state.auth)
  
    
   const [isOpen, setIsOpen] = useState(false); //For dropdown on hover


  return (
   <div className='text-white h-24 flex flex-row justify-between items-center px-4 bg-black'>
        <Link to='/'>
        <div className='flex  items-center'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>E-Shop</h1> 
        <FaShopify size={35} fill='orange'/> 
        </div>
        </Link>
        <ul className='hidden md:flex'>
        <Link to='/cart'>
            <li className="p-4 flex items-center hover:border-b-2 border-[#00df9a] cursor-pointer relative">
            <div className="mr-2">Cart</div>
           
            <FaShoppingCart size={30} fill="white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            )}
          </li></Link>
          <Link to='/login'>
          {userInfo ? 
           <li className="p-4 flex items-center hover:border-b-2 border-[#00df9a] cursor-pointer relative text-left"  onMouseEnter={() => setIsOpen(true)}  onMouseLeave={() => setIsOpen(false)}>
            <div className="mr-2">{userInfo?.user?.name}</div>
            <FaUser size={30} fill="white" />
            {isOpen && (
             <div className="absolute left-0 mt-8 w-48 bg-black border border-gray-500 rounded-lg shadow-lg transition-opacity duration-200 opacity-100">
              <ul className="py-2">
               <Link to='/logout'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-black">Log Out</li></Link>
               <Link to='/profile'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-black">Profile</li></Link>
              </ul>
             </div>
          )}
          </li> : 
          <li className="p-4 flex items-center hover:border-b-2 border-[#00df9a] cursor-pointer relative text-left" onMouseEnter={() => setIsOpen(true)}  onMouseLeave={() => setIsOpen(false)}>
           <div className="mr-2">User</div>
           <FaUser size={30} fill="white" />
           {isOpen && (
             <div className="absolute left-0 mt-8 w-48 bg-black border border-gray-500 rounded-lg shadow-lg transition-opacity duration-200 opacity-100">
              <ul className="py-2">
               <Link to='/login'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-black">Log In</li></Link>
               <Link to='/register'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-black">Register</li></Link>
               <Link to='/profile'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-black">Profile</li></Link>
              </ul>
             </div>
          )}
          </li>}
          </Link>
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
             <li className="p-4 flex items-center border-b border-white relative">
              <div className="mr-2">Cart</div>
               <FaShoppingCart size={30} fill="white" />
               {cartItems.length > 0 && (
               <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
                )}
            </li>
            <li className="p-4 flex items-center">
             <div className="mr-2">Sign in</div>
              <FaUser size={30} fill="white" />
            </li>
          </ul>
    </div>
   </div>
  )
}

export default Navbar


{/*
    <li className='p-4 flex items-center hover:border-b-2 border-[#00df9a] cursor-pointer'>
                <div>Cart</div>
                <FaShoppingCart size={30} fill='white'/>
            </li>
            <li className='p-4 flex items-center hover:border-b-2 border-[#00df9a] cursor-pointer'>
            <div>Sign in</div>
                <FaUser size={30} fill='white'/>
            </li>
  
  
  
  */}



{/*
  
  <li className='p-4  flex items-center border-b border-white '>
              <div>Cart</div>
                <FaShoppingCart size={30} fill='white'/>
                {cartItems.length > 0 && (
                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                   {10}  
                 </span>
                 )}
               </li>
              <li className='p-4 flex items-center'>
              <div>Sign in</div>
                <FaUser size={30} fill='white'/>
              </li>
  
  
  */}