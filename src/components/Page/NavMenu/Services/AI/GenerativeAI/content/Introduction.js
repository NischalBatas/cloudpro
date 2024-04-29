import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Introduction = () => {
  return (
    <div
      className="bg-cloud1 pb-16 relative w-full bg-no-repeat bg-center bg-cover z-10 h-[680px]"
      style={{
        backgroundImage: "url('/Image/process/generativeapp/robot.svg')",
      }}
    >
      <div
        className="w-full relative bg-no-repeat bg-center bg-cover z-20"
        style={{
          backgroundImage: "url('/Image/process/generativeapp/cloud6.svg')",
        }}
      ></div>
      <div className="navbar-main pt-24 flex flex-col justify-end h-full pb-4">
        <div className="text-cloud uppercase text-[12px] tracking-wildest mb-6">
          <Link href="/" className="mr-1">
            Services
          </Link>
          <span className="">/ Generative AI And ML</span>
        </div>
        <div className="py-1 font-semibold text-white text-xl md:text-2xl lg:text-[40px] mb-3">
          Generative AI Applications
        </div>
        <div className="text-[14px] max-w-[691px] mb-8">
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
        <button className="bg-cloud rounded-md px-2 py-3 w-auto text-[14px]">Speak to an AI export</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
