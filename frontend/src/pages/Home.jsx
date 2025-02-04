import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Products from './Products.jsx'


const Home = () => {
  return (
    <div className=' '>
       <Navbar/>
       <Products/>
       <Footer/>
    </div>
  )
}

export default Home