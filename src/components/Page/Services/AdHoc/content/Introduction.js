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
          backgroundImage: "url('/Image/service-bg/10.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Ad-hoc reporting solutions </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Enable Dynamic Decision-Making with Ad-hoc Reporting Solutions
          </p>
          <div className="service_main_description">
            Empower your business users with Cloudproai’s Ad-hoc Reporting
            Solutions, allowing them to create customized, timely reports based
            on their immediate needs. This flexibility ensures that
            decision-makers have the most relevant data at their fingertips,
            facilitating quick responses and informed decisions in a dynamic
            business environment. Discover the power of flexible data
            exploration and real-time analytics with Cloudproai’s Ad-hoc
            Reporting Solutions.
          </div>

          <div>
            <button onClick={()=>{onHandleSubmit('/contactus')}}  className="service_main_button">Customize Your Reports</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
