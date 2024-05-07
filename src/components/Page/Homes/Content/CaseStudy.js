
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import '../../CaseStudy/casestudy.css'
import { caseStudy } from "@/db/casestudy/casestudy";
const CaseStudy = () => {
  const contents=caseStudy.slice(2,5)
  return (
    <div className="main-container py-5 md:py-14">
      <div className="mb-8 w-full md:w-8/12 lg:w-4/12 text-left">
        <div className="font-semibold text-[32px]">Case Studies</div>
        {/* <div className="text-cloud3 mt-3 text-sm">
          We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.
        </div> */}
      </div>

   
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-6">
          
{contents.map((item, index) => {
            return (
              <Link href='/casestudy/1' className="">
                <div key={index} className="md:max-w-[324px] casestudy_product_container">
                  <div
                    className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <div className="flex justify-between  px-4 pt-4  ">
                      <div className="text-white text-base  font-medium w-44">
                        {item.sector}
                      </div>
                      <div className="casestudy_product_arrow">
                      <MdOutlineArrowOutward className="casestudy_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
                    </div>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center text-xs mt-3 text-white">
                    <div className="bg-cloud px-2 rounded-full py-1">
                      {item.category}
                    </div>
                    <div className="text-[10px] text-[#909090] tracking-wider">
                      {item.published}
                    </div>
                  </div>

                  <div className="my-4">
                    <div className="casestudy_product_title font-semibold text-[16px] text-[#fff]">
                      {item.title}
                    </div>
                    <div className="casestudy_product_description mt-2 text-[14px] text-[#B8BEBF] leading-6">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
    
    </div>
  );
};

export default CaseStudy;
