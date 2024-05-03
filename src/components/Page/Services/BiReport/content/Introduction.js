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
            <span className="">/ BI report & dashboard </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Empower Decision-Making with Custom BI Reports and Dashboards{" "}
          </p>
          <div className="service_main_description">
            Transform your data into actionable insights with Cloudproai’s BI
            Report and Dashboard services. Our solutions provide powerful
            visualization tools and custom reports that allow stakeholders to
            grasp complex data quickly and make informed decisions effectively.
            Optimize your strategic planning and performance monitoring with
            clear, impactful data presentations. Drive better business outcomes
            with enhanced data visualization and analytics capabilities from
            Cloudproai.
          </div>

          <div>
            <button onClick={()=>{onHandleSubmit('/contactus')}} className="service_main_button">Visualize Your Success</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
