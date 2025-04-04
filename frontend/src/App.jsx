import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Logout from './pages/Logout'

import PrivateRoute from './components/PrivateRoute'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrder from './pages/PlaceOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
        <Route path='' element={<PrivateRoute/>}>
           <Route path='/shippingpage' element={<ShippingPage/>}/> 
           <Route path='/paymentpage' element={<PaymentPage/>}/> 
           <Route path='/placeorder' element={<PlaceOrder/>}/> 
        </Route>

    
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
