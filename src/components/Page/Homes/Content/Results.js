import { industries } from "@/db/industries";
import { results } from "@/db/results";
import React from "react";

const Results = () => {
  return (
    <div className="navbar-main bg-cover text-white py-10" style={{backgroundImage:"url('/Image/results/Rectangle686.png')"}}>
      <p className="text-lg font-medium text-cloudBtn">WHAT WE DO</p>
      <p className="text-white  w-full lg:w-4/12 py-2 text-2xl font-medium">
        Our results in numbers
      </p>
      <div className="flex justify-center md:justify-start flex-wrap gap-2 md:gap-4 my-6 ">
        {results.map((item, index) => {
          return (
            <div
              key={index}
              className="h-44 w-44 md:h-64 md:w-60 relative  bg-no-repeat bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className=" flex flex-col justify-end text-right h-full ">
              <div className="text-white px-4"><span className="text-3xl md:text-6xl font-semibold num" data-val={`${item.ratio}`}>{item.ratio}</span>%</div>
                <div className="text-white text-xs md:text-sm px-4 pt-1 pb-5 opacity-70">{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
