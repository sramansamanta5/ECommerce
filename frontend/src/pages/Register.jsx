import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate,Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

const Register = () => {

  const [email, setEmail] = useState("");
  const [name,setName]  =useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate=useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";


  const dispatch= useDispatch();
  
   
  const [register, { isLoading, error }] = useRegisterMutation();

  const submitHandler=async(e)=>{
    e.preventDefault();
    if(password !== confirmPassword){
      window.alert('Confirm Password')
    }else{

      try {
        const res = await register({ email,name, password }).unwrap();
        dispatch(setCredentials(res));
        navigate(redirect);
      } catch (error) {
        
      }
    }
  
  }

  return (
    <>
    <Navbar />
    <div className="m-5 flex flex-col justify-center items-center gap-2">
      <h1 className="text-3xl font-bold">Login</h1>

      <h1 className="text-2xl font-semibold">Enter Email:</h1>
      <input
        type="email"
        placeholder="Type email here..."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h1 className="text-2xl font-semibold">Enter Username:</h1>
      <input
        type="email"
        placeholder="Type email here..."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <h1 className="text-2xl font-semibold">Enter Password:</h1>
      <input
        type="password"
        placeholder="Type password here..."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <h1 className="text-2xl font-semibold">Confirm Password:</h1>
      <input
        type="password"
        placeholder="Type password here..."
        className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button
        className="bg-green-600 text-white p-3 rounded-lg cursor-pointer"
        onClick={submitHandler}
        disabled={isLoading}
      >
        {isLoading ? "Registering...." : "Register"}
      </button>

      {error && (
        <p className="text-red-500">{error?.data?.message || "Registration failed"}</p>
      )}

      <p>
        Already registered and have an account? <Link to="/login">Register</Link>
      </p>
    </div>
  </>
  )
}

export default Register