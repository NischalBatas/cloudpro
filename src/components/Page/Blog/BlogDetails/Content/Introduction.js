import Image from "next/image";
import React from "react";
import { TbArrowBackUp, TbShare2 } from "react-icons/tb";
const Introduction = () => {
  return (
    <div className="navbar-main pb-4 pt-10  relative">
      <div className="main-container  bg-black">
        <button className="flex items-center gap-3 text-[16px]">
          <TbArrowBackUp className="text-[24px]" />
          <span>Back</span>
        </button>
        <p className="max-w-[650px] pt-[22px] pb-[24px] text-[28px] md:text-[48px] font-semibold leading-[54px]">
          Exploring Alternative Data: A Beginner's Guide
        </p>

        <div className="bg-[#202020] h-[1px] mt-[35px]"></div>

        <div className="main-container  hidden lg:flex  bg-[#080808] py-8 w-full mx-4 rounded-md gap-6">
          <div>
            <div className="main-container flex items-center justify-between">
              <p>May 20, 2024</p>
              <TbShare2 />
            </div>
            <Image
              width={1500}
              height={500}
              src="/Image/blog/blogBackground.png"
              alt="Blog Background"
            />
            <p className="pt-4 text-[16px] leading-[24px]">
              Alternative data is like finding hidden treasures in unexpected
              places and resources. They are information collected from sources
              that are different from the usual ones everyone uses and
              retrieves.This kind can give us insights that regular sources
              might miss. can give us insights that regular sources might miss.
              But what counts as alternative data can change depending on the
              industry and what kind of data everyone else is using.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
