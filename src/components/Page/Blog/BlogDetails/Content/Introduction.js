import Image from "next/image";
import React from "react";
import { TbArrowBackUp, TbShare2 } from "react-icons/tb";
const Introduction = () => {
  return (
    <div className="navbar-main pb-4 pt-36 h-[320px]   relative">
      <div className="main-container  bg-black">
        <button className="flex items-center gap-3 text-[16px]">
          <TbArrowBackUp className="text-[24px]" />
          <span>Back</span>
        </button>
        <p className="max-w-[650px] pt-[22px] pb-[24px] text-[28px] md:text-[48px] font-semibold md:leading-[54px]">
          Exploring Alternative Data: A Beginner's Guide
        </p>

        <div className="bg-[#202020] h-[1px] mt-[20px]"></div>

       
      </div>
    </div>
  );
};

export default Introduction;
