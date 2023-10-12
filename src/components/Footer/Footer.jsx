import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-[#545454] text-white px-[8.5rem] py-20">
      <div className="flex w-[70%] justify-evenly">
        <div className="pr-40">
          <h1 className="text-[#F3DE53] font-medium text-xl">COMPANY</h1>
          <ul className="list-none leading-10 text-lg">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Team</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/">Meal Plans</Link>
            </li>
            <li>
              <Link to="/">Fitness Plans</Link>
            </li>
          </ul>
        </div>
        <div className="pr-40">
          <h1 className="text-[#F3DE53] font-medium text-xl">DEATOX +</h1>
          <ul className="list-none leading-10 text-lg">
            <li>
              <Link to="/">Partner with us</Link>
            </li>
            <li>
              <Link to="/">Enterprise package</Link>
            </li>
            <li>
              <Link to="/">Build gym</Link>
            </li>
            <li>
              <Link to="/">For enterprise</Link>
            </li>
            <li>
              <Link to="/">t&c for business</Link>
            </li>
          </ul>
        </div>
        <div className="pr-40">
          <h1 className="text-[#F3DE53] font-medium text-xl">CONTACT US</h1>
          <ul className="list-none leading-10 text-lg">
            <li>
              <Link to="/">Help and support</Link>
            </li>
            <li>
              <Link to="/">Enquire</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <img src="/img/Logo.png" alt="" className="h-80 select-none" />
      </div>
    </div>
  );
};

export default Footer;
