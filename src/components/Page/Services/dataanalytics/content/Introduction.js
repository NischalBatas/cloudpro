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
          backgroundImage: "url('/Image/service-bg/5.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Data Analytics</span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Transform Data into Decisions with Advanced Analytics
          </p>
          <div className="service_main_description">
            Leverage Cloudproai’s Data Analytics services to uncover valuable
            insights from your data. Our experts employ cutting-edge techniques
            and tools to analyze, interpret, and visualize data, helping you
            make informed decisions that propel your business forward. Make
            smarter decisions, optimize operations, and innovate with
            Cloudproai’s comprehensive Data Analytics services.
          </div>

          <div>
            <button onClick={()=>{onHandleSubmit('/contactus')}} className="service_main_button">
            Analyse Your Data 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
