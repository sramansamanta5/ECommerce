import React from 'react'
import { useLogutMutation } from '../slices/usersApiSlice.js'
import { logout} from '../slices/authSlice.js'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Logout = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [logoutApiCall]=useLogutMutation()

  const logoutHandler=async()=>{
    try {

      await logoutApiCall().unwrap()
      dispatch(logout())
       navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>Are You Sure You Want To Log Out?</h1>
        <button className='p-3 bg-red-500 text-white' onClick={logoutHandler}>Log Out</button>
    </div>
  )
}

export default Logout