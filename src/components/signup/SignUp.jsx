import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen flex">
      <div className="bg-[#F3DE53] h-screen w-1/2 flex justify-center items-center">
        <img src="/img/Logo.png" alt="" className="h-96" />
      </div>
      <div className="w-1/2 h-screen px-40 py-20">
        <h1 className="text-3xl text-[#545454] font-bold py-6">Welcome!</h1>
        <form action="" className="flex flex-col">
          <label htmlFor="" className="text-[#989898]">
            Email Address
          </label>
          <input
            type="email"
            className="border w-full h-12 rounded-md placeholder-[#D9D9D9] py-1 px-3 mb-5"
            placeholder="umartinez@gmail.com"
          />

          <label htmlFor="" className="text-[#989898]">
            Password
          </label>
          <input
            type="password"
            className="border w-full h-12 rounded-md placeholder-[#D9D9D9] py-1 px-3"
            placeholder="Password"
          />

          <label htmlFor="" className="pb-5 text-sm text-[#989898]">
            Password must be at least 8 characters long.
          </label>

          <label htmlFor="" className="text-[#989898]">
            Confirm Password
          </label>
          <input
            type="password"
            className="border w-full h-12 rounded-md placeholder-[#D9D9D9] py-1 px-3 mb-5"
            placeholder="Confirm Password"
          />

          <p className="text-sm px-5 text-[#989898]">
            By signing up you agree with{" "}
            <span className="text-[#1877F2]">terms and conditions</span>
          </p>

          <button type="submit" className="bg-[#F3DE53] py-3 my-2">
            Sign Up
          </button>
        </form>

        <p className="text-center text-[#989898] pt-3 pb-8">Or Sign in with</p>
        <div className="flex justify-evenly pb-3">
          <img src="/img/google.png" alt="" className="h-8" />
          <img src="/img/facebook.png" alt="" className="h-8" />
          <img src="/img/apple.png" alt="" className="h-8" />
        </div>
        <div className="flex justify-center">
          <span>Already have an account? </span>
          <Link to="/login" className="text-[#1877F2] pl-1">
            {" "}
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
