import React from "react";

const Body = () => {
  return (
    <div className="px-2 h-[calc(100vh-80px)] py-3">
      <div className="flex justify-between items-center">
        <div className="relative">
          <div className="w-[570px] h-[570px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/20 z-10">
            <div className="w-[500px] h-[500px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/40 z-10">
              <div className="w-[430px] h-[430px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/60 z-10">
                <div className="w-[360px] h-[360px] flex justify-center items-center rounded-full border-8 border-[#ffe15d]/80 z-10">
                  <div className="w-[290px] h-[290px] flex justify-center items-center rounded-full border-8 border-[#ffe15d] z-10">
                    <img src="/img/Logo.png" alt="" className="z-10 h-64" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/img/859_ellipse.png"
            alt=""
            className="h-40 absolute -top-6 left-40 z-10"
          />
          <img
            src="/img/858_ellipse.png"
            alt=""
            className="h-32 absolute top-16 right-8 z-10"
          />
          <img
            src="/img/857_ellipse.jpeg"
            alt=""
            className="h-32 w-32 absolute top-48 -left-6 z-10 rounded-full"
          />
          <img
            src="/img/856_ellipse.png"
            alt=""
            className="h-36 absolute -bottom-10 left-20 z-10"
          />
          <img
            src="/img/855_ellipse.png"
            alt=""
            className="h-44 absolute bottom-8 right-12 z-10"
          />
        </div>

        <div className="w-[55%]">
          <div className="py-3">
            <h1 className="text-[#545454] font-oswald text-6xl py-3 font-[1000] tracking-[0.5rem]">
              CHANGE YOUR HABITS
            </h1>
            <span className="text-[#545454] font-oswald text-6xl py-3 font-[1000] tracking-[0.5rem]">
              CHANGE YOUR LIFE
            </span>
            <span className="text-white text-3xl font-oswald px-2">
              WITH AI
            </span>
          </div>
          <p className="w-[75%] py-3 text-lg">
            Our AI-powered algorithm takes into consideration your goals,
            dietary restrictions, food preferences, and fitness level to create
            a comprehensive plan that optimizes your health and fitness journey.
          </p>
          <ul className="flex gap-10 py-3">
            <li>EASY ONBOARDING</li>
            <li>EASY ONBOARDING</li>
            <li>EASY ONBOARDING</li>
          </ul>
          <button className="bg-[#545454] text-white px-5 py-2 my-5 text-sm">
            TRY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
