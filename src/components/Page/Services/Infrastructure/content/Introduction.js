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
          backgroundImage: "url('/Image/service-bg/9.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Infrastructure maigration and upgrades </span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Seamless Infrastructure Migration and Upgrades to the Cloud
          </p>
          <div className="service_main_description">
            Navigate the complexities of cloud migration with Cloudproai’s
            expert services. From initial assessment to final optimization, our
            team ensures a smooth transition and strategic upgrade of your
            infrastructure to the cloud, aligning with your business objectives
            for enhanced scalability, performance, and cost-efficiency.
            Accelerate your cloud transformation with minimal disruption and
            maximum benefits with Cloudproai’s migration and upgrade services.
          </div>

          <div>
            <button className="service_main_button">
            Start Your Cloud Journey 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
