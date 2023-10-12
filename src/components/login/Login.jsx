import React from "react";

const Login = () => {
  return (
    <div className="w-screen flex text-[#2C2C2C]">
      <div className="bg-[#F3DE53] h-screen w-1/2 px-20 pt-5 flex justify-center items-center flex-col">
        <div>
          <h1 className="text-3xl font-semibold py-4 text-center">
            Subscribe to our Enterprise Plan
          </h1>
          <p className="py-2">
            Our Enterprise Plan is designed for businesses and organizations
            that want to provide their employees or members with a personalized
            plans to achieve their health and wellness goals. With our
            Enterprise Plan, you'll get access to a suite of advanced features
            and tools.
          </p>
          <p className="pb-2">
            To request more information about our Enterprise Plan , please fill
            out the form below. One of our representatives will be in touch with
            you shortly.
          </p>
          <ul className="list-disc px-5">
            <li className="font-bold py-2">
              Access advanced analytics and reporting to track your
              organization's fitness and wellness goals
            </li>
            <li className="font-bold py-2">
              Priority access to our team of experts for technical assistance
              and troubleshooting
            </li>
            <li className="font-bold py-2">
              Access advanced analytics and reporting to track your
              organization's fitness and wellness goals
            </li>
          </ul>
        </div>
        <div>
          <img src="/img/Logo_black.png" alt="" />
        </div>
      </div>
      <div className="w-1/2 h-screen px-40 py-12">
        <h1 className="text-3xl text-[#545454] font-bold py-6">
          Enterprise Plan Request!
        </h1>
        <form action="" className="flex flex-col">
          <label htmlFor="" className="text-[#989898]">
            Full Name
          </label>
          <input
            type="email"
            className="border border-[#989898] w-full h-12 placeholder-[#D9D9D9] py-2 px-3 mb-5 rounded-lg"
            placeholder="umartinez@gmail.com"
          />

          <label htmlFor="" className="text-[#989898]">
            Company Name
          </label>
          <input
            type="text"
            className="border border-[#989898] w-full h-12 placeholder-[#D9D9D9] py-2 px-3 mb-5 rounded-lg"
            placeholder=""
          />

          <label htmlFor="" className="text-[#989898]">
            Phone Number
          </label>
          <input
            type="number"
            className="border border-[#989898] w-full h-12 placeholder-[#D9D9D9] py-2 px-3 mb-5 rounded-lg"
            placeholder=""
          />

          <label htmlFor="" className="text-[#989898]">
            Remarks
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="rounded-lg resize-none border border-[#989898] px-3 py-2"
          ></textarea>

          <button type="submit" className="bg-[#F3DE53] py-3 my-7">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
