import IndustriesSlider from "@/components/SplideSlider/IndustriesSlider";
import React from "react";

const IndustriesService = ({item}) => {
  return (
    <div className="navbar-main2 py-[50px] bg-[#3D43562E]">
      <div className="main-container3">
        <span className="uppercase border-l-[5px] px-5 border-[#5677E1] text-[24px] font-bold leading-[32px] tracking-[0.24px]">
          Our Services
        </span>

        <IndustriesSlider serviceItems={item.services}/>
      </div>
    </div>
  );
};

export default IndustriesService;
