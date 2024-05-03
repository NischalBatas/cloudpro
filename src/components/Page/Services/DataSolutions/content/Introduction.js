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
          backgroundImage: "url('/Image/service-bg/9.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Data pipeline solutions</span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Unlock the Power of Big Data with Expert Consulting
          </p>
          <div className="service_main_description">
            Streamline Your Data Workflows with Advanced Data Pipeline Solutions
            Optimize your data operations with Cloudproai’s Data Pipeline
            Solutions, designed to ensure efficient, reliable, and scalable data
            flow across your entire analytics ecosystem. Our expert team
            configures and manages data pipelines that empower your business to
            process and analyze data in real-time, supporting informed
            decision-making and operational excellence. Enhance your data
            infrastructure for peak performance and flexibility with
            Cloudproai’s specialized Data Pipeline Solutions.
          </div>

          <div>
            <button onClick={()=>{onHandleSubmit('/contactus')}} className="service_main_button">Enhance Your Data Flow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
