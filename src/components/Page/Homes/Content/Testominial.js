import Image from "next/image";
import React from "react";

const Testominial = () => {
  return (
    <div className="navbar-main py-14 testominial-main mb-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[14px] uppercase tracking-widest text-cloud">Testominial</p>
        <p className="text-[32px] font-semibold md:w-80 text-center md:text-left tracking-wild mb-6">What our client say</p>
      </div>

      <div className="flex gap-2 mt-8 owl-carousel owl-theme ">
        <div className="max-w-[540px] m-auto flex flex-col justify-center items-center">
          <p className="text-base text-center">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
          </p>

          <div className="flex gap-2 mt-6">
            <div>
              <Image width={42} height={42} src='/Image/results/profile.png' alt="testominial-image"/>
            </div>
            <div>
              <p className="font-semibold">Sujan Timilsina</p>
              <p className="text-cloud2">Founder / Stagezero</p>
            </div>
          </div>
        </div>
        <div className="max-w-[540px] m-auto flex flex-col justify-center items-center">
          <p className="text-base text-center">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
          </p>

          <div className="flex gap-2 mt-6">
            <div>
              <Image width={42} height={42} src='/Image/results/profile.png' alt="testominial-image"/>
            </div>
            <div>
              <p className="font-semibold">Prashant khanal</p>
              <p className="text-cloud2">Founder / Stagezero</p>
            </div>
          </div>
        </div>

        <div className="max-w-[540px] m-auto flex flex-col justify-center items-center">
          <p className="text-base text-center">
            We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
            Business and Infrastructure Readiness for the Ultimate Technological
            Leap.
          </p>

          <div className="flex gap-2 mt-6">
            <div>
              <Image width={42} height={42} src='/Image/results/profile.png' alt="testominial-image"/>
            </div>
            <div>
              <p className="font-semibold">Nischal Batas</p>
              <p className="text-cloud2">Founder / Stagezero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testominial;
