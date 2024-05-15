"use client"
import ParticleBackground from "@/components/particles/particleBackground";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import BackgroundImage from "./BackgroundImage";

const Introduction = () => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };
  return (
    <>
    <ParticleBackground/>
      <div className="main-container pb-24 md:pb-36 relative">
      {/* <div
          className="intro-image top-[-60px] w-full h-[794px] absolute bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/path.svg')",
            zIndex: "-1",
          }}
        ></div> */}
      <BackgroundImage/>
        <div className="pt-48 z-20 px-3">
          <div className="flex md:justify-center items-center md:text-center">
            <p className="w-[327px] md:w-8/12 text-[24px] md:text-[40px] md:leading-[2.99rem] font-bold text-white">
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
            <button title="tab1"
              onClick={() => {
                handleClick("/contactus?tab=tab1");
              }}
              className="bg-cloudBtn main_button px-5 py-2 text-cloudText rounded-[8px] text-[14px] font-medium"
            >
              Contact Us
            </button>
            <Link href='/contactus?tab=tab2' className="flex items-center gap-1 text-[16px] text-white">
              Book a Free Call <MdOutlineArrowOutward />
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Introduction;
