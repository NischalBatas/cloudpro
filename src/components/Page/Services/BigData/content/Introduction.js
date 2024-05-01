import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Introduction = () => {
  return (
    <div className="pb-16 relative w-full h-[680px]">
      {/* <div
        className="w-full absolute bg-no-repeat bg-center overflow-visible"
        style={{
          backgroundImage: "url('/Image/process/generativeapp/cloud6.svg')",
          height: "528px"
        }}
      ></div> */}
      <div
        className="w-full absolute bg-no-repeat bg-center bg-cover h-[680px] z-10"
        style={{
          filter: "blur(5px)",
          zIndex: "-1",
          backgroundImage: "url('/Image/process/generativeapp/robot.svg')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="text-cloud uppercase text-[12px] tracking-wildest mb-6">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Generative AI And ML</span>
          </div>
          <div className="py-1 font-semibold text-white text-xl md:text-2xl lg:text-[40px] mb-3">
            Unlock the Power of Big Data with Expert Consulting
          </div>
          <div className="text-[14px] max-w-[691px] mb-8">
            Harness the full potential of your data assets with Cloudproai’s Big
            Data consulting services. Our team of experts assists in developing
            strategies that transform complex data sets into actionable
            insights, driving innovation and competitive advantage in your
            market. Enhance decision-making, optimize operations, and foster
            innovation with Cloudproai’s comprehensive Big Data consulting
            services. Call to Action Text: Empower Your Data 
          </div>

          <div>
            <button className="bg-cloud rounded px-2 py-3 w-auto text-[14px]">
              Speak to an AI export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
