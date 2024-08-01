"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import ServiceEmail from "./Services/ServiceEmail";
import Footer from "../Footer/Footer";

const EmailTemp = () => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };
  return (
    <div>
      <div className="h-[373px] bg-[#4D73EB]  pt-12 pb-12 text-center  flex flex-col justify-center items-center">

      
      <Image width={250} height={250} src='/Image/logo/logo-white.svg' alt="logo"/>
      </div>

      <div className="navbar-main bg-black ">
        <div className="main_container5 relative bottom-28 ">
          <div>
            <Image
              width={938}
              height={351}
              src="/Image/emailtemp/1.svg"
              alt="newsletter"
            />
          </div>
          <div className=" text-center  flex flex-col justify-center items-center mt-[60px]">
            <p className="text-[32px] md:text-[36px] font-bold uppercase">
              Welcome to cloudpro.AI
            </p>
            <p className="py-2 md:p-0 text-[18px] md:text-[24px] max-w-[760px] leading-snug text-[#A7A7A7] mt-[16px]">
              We're passionate about helping businesses leverage Data, AI,
              Software, and Cloud Services to achieve extraordinary results.
              We're Gen AI-Ready, and we're eager to collaborate with you to
              assess your readiness and craft a customized strategy that
              delivers real, measurable impact.
            </p>
          </div>

          <div className="flex md:justify-center items-center gap-3  mt-6">
            <button
              onClick={() => {
                handleClick("/contact?action=message");
              }}
              className="bg-cloudBtn main_button px-[32px] py-[24px] text-[28px] text-cloudText rounded-[16px]  font-semibold"
            >
              Contact Us
            </button>
          </div>

          <div className="mt-[121px]">
          <div className="text-center text-[32px] font-semibold  mb-[25px]">
             <p>Explore Top Services</p>
            
          </div>
          <ServiceEmail/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EmailTemp;
