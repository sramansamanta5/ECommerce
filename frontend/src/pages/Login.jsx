import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApiSlice.js";
import { setCredentials } from "../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, error }] = useLoginMutation();  //Mutations use array destructuring because they return [triggerFunction, { isLoading, error }].
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect, { replace: true });
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap(); // Fix: Unwrap the response
      dispatch(setCredentials(res));
      navigate(redirect);
    } catch (err) {
      console.error(err?.data?.message || err.error);
    }
  };

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

        <h1 className="text-2xl font-semibold">Enter Password:</h1>
        <input
          type="password"
          placeholder="Type password here..."
          className="p-2 w-1/2 h-8 border-2 border-black rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-green-600 text-white p-3 rounded-lg cursor-pointer"
          onClick={submitHandler}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-500">{error?.data?.message || "Login failed"}</p>
        )}

        <p>
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
