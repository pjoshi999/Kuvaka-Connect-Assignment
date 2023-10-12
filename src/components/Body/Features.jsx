import React from "react";

const Features = () => {
  return (
    <div className="h-[100vh] pt-28 relative">
      <h1 className="font-oswald text-[#F9D326] font-extralight text-6xl z-10 w-[19.5rem] mx-[8.5rem] text-center">
        FEATURES
      </h1>
      <div className="bg-white mx-[12rem] my-9 px-20 py-4 gap-10 shadow-2xl flex justify-between items-center">
        <div>
          <div className="border-l-[6px] border-[#F9D326] pl-5 my-8">
            <h1 className="font-oswald font-medium text-[#545454] text-2xl">
              PERSONALISED
            </h1>
            <h1 className="font-oswald font-medium text-[#545454] text-2xl">
              RECOMMENDATIONS
            </h1>
            <p className="text-[#545454] font-light leading-5 py-1">
              DEATOX uses AI to analyze user data such as age, gender, weight,
              height, dietary preferences, and fitness goals to generate
              personalized meal and fitness plans.
            </p>
          </div>
          <div className="border-l-[6px] border-[#F9D326] pl-5 my-8">
            <h1 className="font-oswald font-medium text-[#545454] text-2xl">
              MEAL PLANNING
            </h1>
            <p className="text-[#545454] font-light leading-5 py-1">
              DEATOX generates weekly meal plans based on your dietary
              preferences, calorie requirements, and nutrient needs.
            </p>
          </div>
          <div className="border-l-[6px] border-[#F9D326] pl-5 my-8">
            <h1 className="font-oswald font-medium text-[#545454] text-2xl">
              FITNESS
            </h1>
            <h1 className="font-oswald font-medium text-[#545454] text-2xl">
              PLANNING
            </h1>
            <p className="text-[#545454] font-light leading-5 py-1">
              DEATOX generates weekly fitness plans based on your fitness goals,
              workout preferences, and fitness level.
            </p>
          </div>
        </div>
        <div>
          <div className="border-l-[6px] border-[#F9D326] pl-5 my-8">
            <h1 className="font-oswald font-medium text-[#545454] text-2xl">
              PROGRESS TRACKING
            </h1>
            <p className="text-[#545454] font-light leading-5 py-1">
              DEATOX generates weekly fitness plans based on your fitness goals,
              workout preferences, and fitness level.
            </p>
          </div>
          <div className="border-l-[6px] border-[#F9D326] pl-5 my-8">
            <h1 className="font-oswald font-medium text-[#545454] text-2xl">
              ML BASED RECOMMENDATIONS
            </h1>
            <p className="text-[#545454] font-light leading-5 py-1">
              DEATOX uses machine learning algorithms to learn from your data
              and improve the accuracy and relevance of its meal and fitness
              recommendations over time.
            </p>
          </div>
          <div className="my-8 ">
            <h1 className="font-oswald font-medium text-[#F9D326] text-2xl">
              Get your fitness plan for free!
            </h1>
            <p className="text-[#545454] leading-5 py-2">
              Join the Deatox community today and start your journey towards a
              healthier and happier you.
            </p>
            <button className="bg-[#F9D326] text-black px-4 py-2 my-2">
              TRY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
