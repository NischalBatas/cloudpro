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
            <span className="">/ ETL</span>
          </div>
          <p className="py-1 max-w-[691px]  font-semibold text-white text-xl md:text-2xl lg:text-4xl mb-3">
            Streamline Your Data Operations with Advanced ETL Services
          </p>
          <div className="text-[14px] max-w-[691px] mb-8">
            Master your data landscape with Cloudproai’s ETL services, designed
            to efficiently extract, transform, and load your data, ensuring it's
            ready for analysis and decision-making. Optimize your data workflows
            to support real-time intelligence and operational efficiency.
            Enhance your data management, increase accessibility, and drive
            better business outcomes with Cloudproai’s expert ETL services.
          </div>

          <div>
            <button className="bg-cloud rounded px-2 py-3 w-auto text-[14px]">
            Call to Action Text: Transform Your Data Today 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
