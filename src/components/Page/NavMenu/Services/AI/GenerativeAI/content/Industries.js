import React from "react";
import IndustriesCategory from "./IndustriesCategory";

const Industries = () => {
  return (
    <div className="navbar-main bg-[#EDF6FF] py-10 flex flex-wrap items-center">
      <div className="max-w-[417px]">
        <p className="font-bold text-[#071518] text-[36px] leading-10">Impact Across Industries.</p>
        <p className="text-[16px] text-[#393939] mt-4">
          Our tailored solutions spans across diverse industries and has
          impacted multiple businesses. Know how it can help your business grow.
        </p>
      </div>

      <IndustriesCategory/>
    </div>
  );
};

export default Industries;
