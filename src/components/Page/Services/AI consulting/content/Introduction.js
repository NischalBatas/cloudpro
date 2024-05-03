"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import '../../services.css'
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
          backgroundImage: "url('/Image/service-bg/2.webp')",
        }}
      ></div>
      <div
        className="navbar-main pt-24 h-full pb-4 "
        style={{ zIndex: "11" }}
      >
        <div className="main-container flex flex-col justify-end h-full">
        <div className="service_main_path">
          <Link href="/" className="mr-1">
            Services
          </Link>
          <span className="">/ AI Consulting</span>
        </div>
        <p className="text-xl md:text-2xl lg:text-4xl service_main_title">
        Empower Your Business with Expert AI Consulting Services
        </p>
        <div className="service_main_description">
          In today's competitive and rapidly evolving digital landscape,
          businesses of all sizes are on a quest for innovative solutions that
          can propel them ahead of the curve. At the heart of this quest is
          generative AI, a transformative force in artificial intelligence that
          offers unparalleled creativity and efficiency. Cloud ProAI stands as a
          beacon in this journey, enabling businesses to harness the power of
          generative AI apps to foster originality, automate processes, and
          personalize customer experiences at an unprecedented scale.
        </div>

        <div>
          <button onClick={()=>{onHandleSubmit('/contactus')}} className="service_main_button">
          Partner with Us 
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
