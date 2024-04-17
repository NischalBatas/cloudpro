import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Introduction = () => {
  return (

      <div className="bg-cloud1 pb-16">
        <div>
          <Image alt='bg-image' width={100} height={100} src="/Image/backgroundimage.svg" style={{width:'100%', height:'120px'}}/>
        </div>
        <div className="navbar-main">
          <div className="w-80 lg:w-96">
            <p className="text-2xl lg:text-3xl font-bold text-white">
              Data, AI and Software Cloud Services Consultant
            </p>
          </div>
          <div className="text-cloud2 w-60 md:w-96 pt-2">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
          </div>
          <div className="flex items-center gap-3 lg:w-96 mt-8">
            <button className="bg-cloudBtn text-cloudBtnText px-2 py-1 rounded">
              Contact Us
            </button>
            <span className="flex gap-1 text-white">
              Book a Free Call <MdOutlineArrowOutward />
            </span>
          </div>
        </div>
      </div>
  
  );
};

export default Introduction;
