import Image from "next/image";
import React from "react";
import { empowerIndustries } from "@/db/empowerIndustries";
const Fields = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mt-4">
      {empowerIndustries.map((item, index) => {
        return (
          <div key={index}
            className="relative field-content bg-no-repeat rounded border border-black"
            style={{
              width: "295px",
              height: "396px",
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="flex flex-col justify-between h-full ">
              <div className="flex justify-end pt-2 pr-2 opacity-55">
                <button className="bg-cloud2 px-3 py-1 text-xs font-medium capitalize rounded">
                  {item.sector}
                </button>
              </div>
              <div className="text-white text-sm px-4 pb-5">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Fields;
