import React from "react";

const DeatoxPackage = () => {
  return (
    <div className="h-[100vh] pt-20 relative">
      <div className="flex items-center">
        <div className="ml-[8.5rem]">
          <h1 className="font-oswald tracking-wide font-medium text-6xl text-white z-10 w-[19.5rem] text-center pb-2">
            DEATOX
          </h1>
          <h1 className="font-oswald text-[#F9D326] font-extralight text-6xl z-10 w-[19.5rem] text-center">
            PACKAGE
          </h1>
        </div>
        <div className="w-[28rem] ml-16">
          <h1 className="text-[#F9D326] font-oswald text-4xl">
            Get your fitness plan for free!
          </h1>
          <p className="text-[#545454] leading-6 py-2 text-xl">
            Join the Deatox community today and start your journey towards a
            healthier and happier you.{" "}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="py-9 z-50 flex justify-between mx-[8.5rem]">
        <div className="w-[18rem] relative h-96 overflow-hidden bg-[#F9D326] z-20 flex justify-center items-center flex-col shadow shadow-[#545454]">
          <div className="bg-[#545454] absolute -top-5 -left-10 -z-10 w-28 h-16 text-[#545454] -rotate-45 select-none">
            Text
          </div>
          <div className="bg-[#545454] absolute top-4 left-4 rounded-full mr-5">
            <img src="/img/Logo.png" alt="" className="w-[38px] h-[38px]" />
          </div>
          <div className="mx-8">
            <div className="border-b-[3px] border-[#545454] pt-8 pb-2 h-[35%]">
              <h1 className="text-white text-2xl font-medium font-oswald">
                MONTHLY
              </h1>
              <h4 className="text-3xl tracking-wide">$9.99</h4>
            </div>
            <ul className="list-disc text-sm pl-5 h-[54%]">
              <li className="pt-2">Customized workout plans</li>
              <li className="pt-2">Access to healthy recipes</li>
              <li className="pt-2">Advanced health tracking tools</li>
              <li className="pt-2">
                Personalized recommendations based on your goals
              </li>
              <li className="py-2">Unlimited customer support </li>
            </ul>
            <button className="bg-[#545454] text-white w-full py-1 my-1 h-[11%]">
              GET NOW
            </button>
          </div>
        </div>

        <div className="w-[18rem] relative h-96 overflow-hidden bg-[#F9D326] z-20 ml-[8.5rem] flex justify-center items-center flex-col shadow shadow-[#545454]">
          <div className="bg-[#545454] absolute -top-5 -left-10 -z-10 w-28 h-16 text-[#545454] -rotate-45 select-none">
            Text
          </div>
          <div className="bg-[#545454] absolute top-4 left-4 rounded-full mr-5">
            <img src="/img/Logo.png" alt="" className="w-[38px] h-[38px]" />
          </div>
          <div className="mx-8">
            <div className="border-b-[3px] border-[#545454] pt-8 pb-2 h-[35%]">
              <h1 className="text-white text-2xl font-medium font-oswald">
                YEARLY
              </h1>
              <span className="text-3xl tracking-wide line-through decoration-[#545454] text-white">
                $99.99
              </span>
              <span className="text-xl tracking-wide decoration-[#545454] text-[#545454] pl-1">
                $99.99
              </span>
            </div>
            <ul className="list-disc text-sm pl-5 h-[54%]">
              <li className="pt-2">Customized workout plans</li>
              <li className="pt-2">Access to healthy recipes</li>
              <li className="pt-2">Advanced health tracking tools</li>
              <li className="pt-2">
                Personalized recommendations based on your goals
              </li>
              <li className="py-2">Unlimited customer support </li>
            </ul>
            <button className="bg-[#545454] text-white w-full py-1 my-1 h-[11%]">
              GET NOW
            </button>
          </div>
        </div>

        <div className="w-[18rem] relative h-96 overflow-hidden bg-white z-20 ml-[8.5rem] flex justify-center items-center flex-col shadow shadow-[#545454]">
          <div className="bg-[#F9D326] absolute -top-5 -left-10 -z-10 w-28 h-16 text-[#F9D326] -rotate-45 select-none">
            Text
          </div>
          <div className="bg-[#545454] absolute top-4 left-4 rounded-full mr-5">
            <img src="/img/Logo.png" alt="" className="w-[38px] h-[38px]" />
          </div>
          <div className="mx-8">
            <div className="border-b-[3px] border-[#F9D326] pt-8 pb-2 ">
              <h1 className="text-[#545454] text-2xl font-medium font-oswald h-[35%] ">
                ENTERPRISE
              </h1>
              <span className="text-3xl tracking-wide decoration-[#545454] text-white">
                L
              </span>
            </div>
            <ul className="list-disc text-sm pl-5 pb-14">
              <li className="pt-2 h-[54%]">
                Looking to offer personalized fitness and meal plans to your
                employees?
              </li>
              <li className="pt-2">
                Our Enterprise Plan brings you the best features.
              </li>
            </ul>
            <button className="bg-[#F9D326] text-[#545454] w-full py-1 my-1">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-16 right-10">
        <img
          src="/img/1050_rectangle.png"
          alt=""
          className="h-[80vh] select-none"
        />
      </div>
    </div>
  );
};

export default DeatoxPackage;
