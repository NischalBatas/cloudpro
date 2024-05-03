import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "../../services.css";
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
          backgroundImage: "url('/Image/service-bg/11.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Data Visualization Solutions </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Bring Your Data to Life with Advanced Data Visualization Solutions
          </p>
          <div className="service_main_description">
            Elevate your analytics with Cloudproai’s Data Visualization
            Solutions. Our team empowers organizations to visualize complex
            datasets in an intuitive format, making it easier to identify
            trends, patterns, and outliers. By enhancing the way you see data,
            we help you make informed decisions quickly and effectively.
            Transform data into visually engaging insights with Cloudproai’s
            cutting-edge Data Visualization Solutions.
          </div>

          <div>
            <button className="service_main_button">Visualize Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
