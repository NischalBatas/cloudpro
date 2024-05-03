"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Introduction = () => {
  const router=useRouter()

  const handleClick=(path)=>{
    router.push(path)
  }
  return (
    <>
      <div className="main-container pb-24 md:pb-40 relative">

        
        <div
          className="intro-image w-full h-[742px] absolute bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/Image/background.svg')",
            zIndex: "-1",
          }}
        ></div>
        <div className="pt-44 z-20 px-3">
          <div className="flex md:justify-center items-center md:text-center">
            <p
              className="w-[327px] md:w-8/12 text-[24px] md:text-[40px] font-bold text-white"
            
            >
              Data, AI and Software Cloud Services Consultant
            </p>
          </div>

          <div className="flex md:justify-center items-center text-cloud2 md:text-center pt-3">
            <p className="w-full md:w-[480px] text-[14px] md:text-base">
              We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
              Business and Infrastructure Readiness for the Ultimate
              Technological Leap.
            </p>
          </div>
          <div className="flex md:justify-center items-center gap-3  mt-6">
            <button onClick={()=>{handleClick('/contactus')}} className="bg-cloudBtn px-3 py-2 text-cloudText rounded font-medium">
              Contact Us
            </button>
            <span className="flex items-center gap-1 text-[16px] text-white">
              Book a Free Call <MdOutlineArrowOutward />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
