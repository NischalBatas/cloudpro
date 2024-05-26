import TestominialSlider from "@/components/SplideSlider/TestominialSlider";
import Image from "next/image";
import React from "react";
import '../slider.css'
const Testominial = () => {
  return (
    <div className="py-14 testominial-main testominial-home mb-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[14px] uppercase tracking-widest text-cloud">
          Testominials
        </p>
        <p className="text-[32px] font-semibold md:w-80 text-center md:text-left tracking-wild mb-6">
          What our client say
        </p>
      </div>

      <div className="flex mt-8 ">
        <TestominialSlider />
      </div>
      
    </div>
  );
};

export default Testominial;
