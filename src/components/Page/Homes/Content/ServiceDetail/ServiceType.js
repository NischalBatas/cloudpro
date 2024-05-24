"use client"
import ServiceDetailTypes from "@/components/SplideSlider/ServiceDetailTypes";
import Image from "next/image";
import React from "react";

const ServiceType = ({item}) => {
  return (
    <div className="navbar-main2 bg-cloud py-[35px]">
      <div className="main-container3">
        <p className="max-w-[427px] text-[24px] font-bold tracking-[0.72px] capitalize">
          {item.servicetype.title}
        </p>

        {/* <div className="my-[32px] w-full h-[4px] bg-[#3B5DCB]"></div> */}
        <div className="my-[26px] flex justify-between gap-4 flex-wrap md:flex-nowrap">
        
          
     <ServiceDetailTypes item={item.servicetype}/>

         
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
