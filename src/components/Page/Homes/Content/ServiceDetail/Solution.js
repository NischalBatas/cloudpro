import { ServiceDetail } from "@/db/home/serviceDetail/ServiceDetail";
import Image from "next/image";
import React from "react";

const Solution = ({item}) => {
  return (
    <div className="navbar-main py-[44px] bg-white text-black">
      <div className="main-container ">
        <div className="mb-[50px] max-w-[574px] text-[24px] md:text-[32px] font-bold tracking-[0.32px] capitalize">
          <p>{item.solutions.title} </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {item.solutions.solutiontypes.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-[32px]">
                <Image
                  width={100}
                  height={100}
                  src={item.image}
                  alt="service detail"
                />
                <div>
                  <span className="text-[20px] font-semibold">
                    {item.title}
                  </span>
                  <p className="max-w-[295px] text-[14px] leading-[24px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solution;
