"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "../../services.css";
import { useRouter } from "next/navigation";
const Introduction = () => {
  const router = useRouter();
  const onHandleSubmit = (path) => {
    router.push(path);
  };
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
          backgroundImage: "url('/Image/service-bg/12.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Data Lakes and Warehouses </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Build the Foundation for Advanced Analytics with Data Lakes and
            Warehouses
          </p>
          <div className="service_main_description">
            Empower your business with Cloudproai’s Data Lakes and Warehouses
            services, designed to centralize and structure massive amounts of
            data for complex analysis and business intelligence. Our solutions
            enable scalable, secure, and efficient data storage that supports
            real-time decision-making and data-driven innovation. Streamline
            your data operations and unlock powerful insights with Cloudproai’s
            expert Data Lakes and Warehouses services.
          </div>

          <div>
            <button onClick={()=>{onHandleSubmit('/contactus')}} className="service_main_button">Optimize Your Data Storage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
