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
            <span className="">/ CloudOps</span>
          </div>
          <p className="py-1 max-w-[691px]  font-semibold text-white text-xl md:text-2xl lg:text-4xl mb-3">
            Maximize Efficiency with Proactive CloudOps Services
          </p>
          <div className="text-[14px] max-w-[691px] mb-8">
            Elevate your cloud operations with Cloudproai’s CloudOps services,
            ensuring continuous optimization, reliability, and security of your
            cloud infrastructure. Our expert team empowers your business to
            thrive in the cloud, reducing overheads and boosting performance.
            Drive operational excellence and ensure high availability with
            Cloudproai’s expert CloudOps services.
          </div>

          <div>
            <button className="bg-cloud rounded px-2 py-3 w-auto text-[14px]">
            Call to Action Text: Optimize Your Cloud 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
