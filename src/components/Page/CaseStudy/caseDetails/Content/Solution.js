import SolutionSlider from "@/components/SplideSlider/SolutionSlider";
import React from "react";
import '../../casestudy.css'
const Solution = ({ content }) => {
  return (
    <div className="navbar-main py-10 md:py-16" id="solution_section">
      <div className="main-container">
        <div>
          <p className="text-[24px] font-semibold">Solution</p>
          <p className="text-[14px] leading-6">Process Flow</p>
        </div>
        {/* <div className="grid grid-cols-2 md:flex md:justify-start gap-2 md:gap-4 flex-wrap">
          {content.map((item, index) => {
            return (
             
                <div key={index} className="mt-5 flex flex-col justify-between bg-[#2A2A2A] max-w-[190px] min-h-[231px] rounded-lg p-3">
                  <p className="text-right text-[14px] uppercase border-b-[1px] border-[#3B3B3B] pb-1">
                    Step {item.step}
                  </p>
                  <p className="text-[#BBBBBB] text-[14px]">
                    {item.title}
                  </p>
                </div>
         
            );
          })}
        </div> */}
         <SolutionSlider content={content}/>
      </div>
    </div>
  );
};

export default Solution;
