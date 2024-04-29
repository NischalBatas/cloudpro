import Image from "next/image";
import React from "react";
import { services } from "@/db/services";
import { MdOutlineArrowOutward } from "react-icons/md";
const Services = () => {
  return (
    <div className="navbar-main flex flex-wrap justify-between bg-[#EDF6FF] rounded gap-2 py-10">
      <div className="max-w-72 py-2 md:py-5 m-auto md:m-0">
        <div className="flex flex-col gap-5 ">
          <Image
            width={259}
            height={259}
            src="/Image/process/cloud14.svg"
            alt="process_image"
            className="flex justify-center m-auto h-full"
          />
          <p className="text-black font-bold text-[24px]">Generative AI And ML</p>
        </div>

      </div>

      {/* <div className="services-line hidden md:block"></div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 md:py-5 ">
        {services.map((item, index) => {
          return (
            <div key={index} className="max-w-96">
              <div className="text-[#071518] font-bold flex items-center text-[16px] gap-1">
                {item.title} <MdOutlineArrowOutward />
              </div>
              <div className="text-cloud3 text-[14px] my-1">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
