import React from "react";
import { industries } from "@/db/industries";
import Image from "next/image";
const Industries = () => {
  return (
    <div className="industries-main text-white py-10 my-8">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-[14px] uppercase tracking-widest text-cloud">
          Industries
        </p>
        <p className="text-center text-white font-semibold text-[32px] w-full md:w-6/12 lg:w-4/12  py-2">
          Our work spans industries & domains.
        </p>
      </div>
      <div className="flex justify-center mx-auto flex-wrap gap-6 my-10 max-w-[850px]">
        {industries.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center field-content p-4 rounded-md border border-[#1E2849] opacity-75 cursor-pointer hover:opacity-100"
            >
              <Image
                width={54}
                height={54}
                src={item.image}
                alt="image_industries"
              />
              <p className="text-white text-sm px-4 mt-4">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
