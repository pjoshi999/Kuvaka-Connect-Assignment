import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[80px] flex items-center justify-between px-16 bg-[#F9D326] shadow shadow-white z-50 text-white border-b-2">
      <div className="flex items-center">
        <div className="bg-[#545454] rounded-full mr-5">
          <img src="/img/Logo.png" alt="" className="w-[43px] h-[43px]" />
        </div>
        <ul className="flex z-30">
          <li className="px-5">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-5">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="px-5">
            <Link to="/">MEAL PLANS</Link>
          </li>
          <li className="px-5">
            <Link to="/">WORKOUT ROUTINE</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <Link to="/login" className="px-5 py-2">
          LOG IN
        </Link>
        <Link to="/signup" className="px-5 bg-white text-black py-2">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Header;
