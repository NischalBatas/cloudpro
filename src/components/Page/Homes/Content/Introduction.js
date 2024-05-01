import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Introduction = () => {
  return (

      <div className="main-container pb-40 relative">
        <div className="intro-image w-full h-[742px] absolute bg-no-repeat bg-center"  style={{backgroundImage:"url('/Image/background.svg')",zIndex:'-1'}}>
        </div>
        <div className="pt-44 mt- z-20">
          <div className="flex justify-center items-center text-center">
            <p className="w-9/12 lg:w-8/12 text-4xl lg:text-[40px] font-bold text-white" style={{lineHeight:'3.5rem'}}>
              Data, AI and Software Cloud Services Consultant
            </p>
          </div>

          <div className="flex justify-center items-center text-cloud2 text-center pt-3">
            <p className="w-9/12 md:w-[480px] text-base">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3  mt-6">
            <button className="bg-cloudBtn px-3 py-2 text-cloudText rounded font-medium">
              Contact Us
            </button>
            <span className="flex items-center gap-1 text-white">
              Book a Free Call <MdOutlineArrowOutward />
            </span>
          </div>
        </div>
      </div>
  
  );
};

export default Introduction;
