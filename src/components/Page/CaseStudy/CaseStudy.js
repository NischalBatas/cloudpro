import { caseStudy } from "@/db/casestudy/casestudy";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./casestudy.css";
const CaseStudy = () => {
  return (
    <div className="">
      <div className="h-[420px] md:h-[504px]  mt-12 pb-12 text-center  flex flex-col justify-center items-center">
        <p className="text-[32px] md:text-[48px] font-bold">Case Studies</p>
        <p className="py-2 md:p-0 text-[12px] md:text-[14px] md:leading-6 max-w-[514px] text-[#bebebe]">
          We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
          Business and Infrastructure Readiness for the Ultimate Technological
          Leap.
        </p>
      </div>

      <div className="navbar-main bg-white ">
        <div className="main-container relative bottom-28  grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 my-6">
          {caseStudy.map((item, index) => {
            return (
              <Link href="/casestudy/1" className="">
                <div
                  key={index}
                  className="md:max-w-[324px] casestudy_product_container"
                >
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
                    <div className="casestudy_product_title font-semibold text-[16px] text-[#000]">
                      {item.title}
                    </div>
                    <div className="casestudy_product_description mt-2 text-[14px] text-[#666666] leading-6">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div>
      
        <div
      className="navbar-main flex flex-col justify-center h-[250px] md:h-[399px]  bg-no-repeat bg-center bg-cover"
      style={{
        // filter: "blur(2px)",
        zIndex: "-1",
        backgroundImage: "url('/Image/casestudy/am.svg')",
      }}
    >
          <div className="flex flex-col md:justify-center md:items-center">
          <span className="font-semibold text-[24px] leading-8">Get Notification by our newsletter</span>
          <p className="mt-2 text-[14px] leading-6 md:text-center max-w-[456px]">
            Subscribe to our newsletter and stay upto date with the latest news,
            updates and exclusive offers. Get valuable insights.
          </p>
          <div className="flex justify-between mt-6 border-[1px] p-1 rounded-[9px] border-[#d2d2d2]">
            <input className="text-[14px] leading-6 pl-2 placeholder-white md:w-[290px]" placeholder="Enter your email"/>
            <button className="bg-black px-5 py-2 rounded-[10px] text-[14px]">Subscribe</button>
          </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default CaseStudy;
