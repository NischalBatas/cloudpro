import Image from "next/image";
import Link from "next/link";
import React from "react";
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
          backgroundImage: "url('/Image/service-bg/3.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="service_main_path">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Generative AI And ML</span>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
            Optimize Your Cloud Infrastructure with Expert Architecture
            Consulting
          </p>
          <div className="service_main_description">
            Elevate your cloud operations with strategic architecture consulting
            from Cloudproai. Our team of cloud experts will guide you through
            designing, optimizing, and scaling your cloud infrastructure to meet
            your business needs efficiently and effectively. Transform your
            cloud strategy, reduce costs, and enhance scalability with
            Cloudproai’s comprehensive architecture consulting services.{" "}
          </div>

          <div>
            <button className="service_main_button">
            Consult with Us 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
