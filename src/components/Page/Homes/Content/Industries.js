import React from "react";
import { industries } from "@/db/industries";
const Industries = () => {
  return (
    <div className="navbar-main industries-main bg-cloud1 text-white py-10">
      <p className="text-lg uppercase tracking-widest text-cloudBtn">Industries</p>
      <p className="text-white font-semibold text-4xl w-full lg:w-4/12 py-2">
      The wide spectrum of industries we serve
      </p>
      <div className="flex justify-between md:justify-start flex-wrap gap-4 my-5 owl-carousel owl-theme">
        {industries.map((item, index) => {
          return (
            <div
              key={index}
              className="h-72 w-auto md:w-52 relative field-content bg-no-repeat bg-cover rounded-lg opacity-75 cursor-pointer hover:opacity-100"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className=" flex flex-col justify-end text-right h-full ">
                <div className="text-white text-sm px-4 pb-5">{item.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
