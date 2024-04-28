import { caseStudy } from "@/db/caseStudy";
import React from "react";

const CaseStudy = () => {
  return (
    <div className="navbar-main py-5 md:py-14">
      <div className="mb-8 w-full md:w-8/12 lg:w-4/12 text-center md:text-left">
        <div className="font-semibold text-[32px]">Case Study</div>
        {/* <div className="text-cloud3 mt-3 text-sm">
          We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.
        </div> */}
      </div>

   
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-6">
          {caseStudy.map((item, index) => {
            return (
              <div key={index} className="md:w-80">
                <div
                  className="h-52 md:w-80 relative  bg-no-repeat bg-cover rounded-lg"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="flex flex-col justify-start text-left h-full ">
                    <div className="text-white text-base px-4 pt-5 font-medium w-44">
                      {item.sector}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-xs mt-2 text-white">
                  <div className="bg-cloud px-2 rounded-full py-1">{item.category}</div>
                  <div>{item.published}</div>
                </div>

                <div className="my-4">
                  <div className="font-semibold text-[16px]">{item.title}</div>
                  <div className="mt-2 text-[14px] text-cloud3 leading-6">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
    
    </div>
  );
};

export default CaseStudy;
