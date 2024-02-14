import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-black bg-cover bg-no-repeat w-full fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center backdrop-blur-xl font-mono -z-1 bg-top text-white">
      <h1 className="text-4xl font-bold font-sans mb-4">Sign Up</h1>
      <div className="flex items-center px-7 h-[35rem] bg-gradient-to-b from-gray-700 to-gray-600">
        <img src="Image/Login.png" alt="" className="w-[40rem] h-[40rem]" />
        <form className="flex flex-col items-start">
          <div className="flex flex-col items-start my-2 text-xl ">
            <label htmlFor="name" className="">
              Name :
            </label>
            <input
              type="name"
              placeholder="Name"
              className="rounded-md p-1 w-80 text-black"
              autocomplete="off"
            />
          </div>
          <div className="flex flex-col items-start my-2 text-xl ">
            <label htmlFor="email" className="">
              Email :
            </label>
            <input
              type="email"
              placeholder="Email"
              className="rounded-md p-1 w-80 text-black"
              autocomplete="off"
            />
          </div>
          <div className="flex flex-col items-start my-2 text-xl ">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              placeholder="Password"
              className="rounded-md p-1 w-80 text-black"
              autocomplete="off"
            />
          </div>
          <div className="flex flex-col items-start my-2 text-xl ">
            <label htmlFor="password">Confirm Password :</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-md p-1 w-80 text-black"
              autocomplete="off"
            />
          </div>
          <a href="#" className="text-xl my-2">
            Forget Password?
          </a>
          <div className="text-xl flex items-center justify-center w-full my-2 text-black bg-orange-600 hover:bg-orange-700 rounded-3xl hover:cursor-pointer">
            <button className=" py-1 font-bold ">Sign Up</button>
          </div>
          <p className="text-xl my-2">
            Alredy have an account?
            <Link to="/" className="text-red-600 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
