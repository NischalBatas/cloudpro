import { testimonial } from "@/db/dataVisual/testimonial";
import React from "react";
const Testimonial = () => {
  return (
    <div className="flex gap-2 flex-wrap lg:flex-nowrap justify-between">
      {testimonial.map((item, index) => {
        return (
          <div key={index} className="testominal max-w-44 md:max-w-64 py-2 md:p-1">
            <div className="text-2xl md:text-4xl font-semibold flex gap-1 items-end"><div className="text-[40px]"><span className="num text-[32px]  md:text-[64px]" data-val={`${item.ratio}`}> {item.ratio}</span></div>%</div>
            <div className="mt-2 md:mt-4 text-[14px]">
              <span className="font-medium capitalize mr-1">{item.status}</span>
              <span className="text-[#5B5B5B]">{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
