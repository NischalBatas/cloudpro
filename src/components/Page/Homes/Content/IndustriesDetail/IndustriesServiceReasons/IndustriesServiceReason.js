import { industriesDetail } from "@/db/home/industriesDetail/industriesDetail";
import Image from "next/image";
import React from "react";

const IndustriesServiceReason = () => {
  return (
    <div className="navbar-main bg-white py-10">
      <div className="main-container ">
        <p className="max-w-[448px] text-[#071518] text-[36px] font-semibold leading-[48px] ">
          Why Choose CloudProAI for e-commerce?{" "}
        </p>

        <div className="flex justify-between gap-4 mt-10 flex-wrap md:flex-nowrap">
          <div className="p-2 border-[1px] border-[#CDCDCD] rounded-[8px] flex justify-center items-center">
            <Image
              width={592}
              height={606}
              src="/Image/process/generativeapp/cloud13.svg"
              alt="why cloudpro"
            />
          </div>
          <div className="flex flex-col gap-4">
            {industriesDetail.map((item,index)=>{
                return(
                    <div className="p-[18px] md:max-w-[471px] border-[1px] border-[#CDCDCD] rounded-[8px]">
                    <span className="text-[#000] font-semibold text-[24px]">
                     {item.title}
                    </span>
                    <p className="mt-1 text-[16px] leading-[24px] text-[#393939]">
                     {item.description}    </p>
                  </div>
                )
            })}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServiceReason;
