import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Introduction = () => {
  return (

      <div className="pb-28 relative">
        <div className="w-full h-24 absolute bg-no-repeat bg-center"  style={{backgroundImage:"url('/Image/backgroundimage.svg')"}}>
        </div>
        <div className="navbar-main pt-24 ">
          <div className="flex justify-center items-center text-center">
            <p className="w-9/12 lg:w-6/12 text-4xl lg:text-5xl font-bold text-white" style={{lineHeight:'3.5rem'}}>
              Data, AI and Software Cloud Services Consultant
            </p>
          </div>

          <div className="flex justify-center items-center text-cloud2 text-center pt-3">
            <p className="w-9/12 md:w-6/12 text-base">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3  mt-6">
            <button className="bg-cloudBtn text-cloudText rounded font-medium">
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
