import React from "react";
import Waitlist from "../Forms/Waitlist";

const Join = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24" id="join">
      <div>
        <h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-center">
          Join the SmoothRent List
        </h2>
        <p className="text-center text-xl text-gray-600 mt-2">
          Enter your details to get updates and perks.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="pt-16">
          <img src="/homeA.png" className="border border-[#" />
        </div>
        <div>
          <Waitlist />
        </div>
      </div>
    </div>
  );
};

export default Join;
