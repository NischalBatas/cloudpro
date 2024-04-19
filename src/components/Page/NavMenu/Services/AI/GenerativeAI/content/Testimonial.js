import React from "react";
import { testimonial } from "@/db/testimonial";
const Testimonial = () => {
  return (
    <div className="flex gap-2 flex-wrap lg:flex-nowrap justify-between">
      {testimonial.map((item, index) => {
        return (
          <div key={index} className="testominal max-w-44 md:max-w-64 py-2 md:p-1">
            <div className="text-2xl md:text-4xl font-medium flex gap-1 items-end"><div className="text-4xl md:text-6xl">{item.ratio}</div>%</div>
            <div className="mt-2 md:mt-4">
              <span className="font-semibold capitalize mr-1">{item.status}</span>
              {item.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
