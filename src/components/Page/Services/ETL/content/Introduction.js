import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import '../../services.css'
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
          // filter: "blur(5px)",
          zIndex: "-1",
          backgroundImage: "url('/Image/service-bg/6.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ ETL</span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Maximize Efficiency with Proactive CloudOps Services
          </p>
          <div className="service_main_description">
            Elevate your cloud operations with Cloudproai’s CloudOps services,
            ensuring continuous optimization, reliability, and security of your
            cloud infrastructure. Our expert team empowers your business to
            thrive in the cloud, reducing overheads and boosting performance.
            Drive operational excellence and ensure high availability with
            Cloudproai’s expert CloudOps services.
          </div>

          <div>
            <button className="service_main_button">
           Optimize Your Cloud 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
