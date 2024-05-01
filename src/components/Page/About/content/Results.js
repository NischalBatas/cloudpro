import { industries } from "@/db/industries";
import { results } from "@/db/results";
import React from "react";

const Results = () => {
  return (
    <div className="navbar-main bg-cover text-white py-14 ">
      <div className="main-container">
        <p className="text-[14px] tracking-widest text-cloudBtn">WHAT WE DO</p>
        <p className="text-white max-w-[427px] py-2 text-[32px] font-bold">
          Our results in numbers
        </p>
        <div className="grid grid-cols-2 md:flex md:justify-start flex-wrap gap-2 md:gap-4 my-6 ">
          {results.map((item, index) => {
            return (
              <div
                key={index}
                className="h-52 md:h-64 md:w-60 relative  bg-no-repeat bg-cover rounded-lg"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className=" flex flex-col justify-end text-right h-full ">
                  <div className="text-white px-4">
                    <span
                      className="text-3xl md:text-6xl font-semibold num"
                      data-val={`${item.ratio}`}
                    >
                      {item.ratio}
                    </span>
                    %
                  </div>
                  <div className="text-white text-xs md:text-sm px-4 pt-1 pb-5 opacity-70">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
