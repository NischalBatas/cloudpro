import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const Introduction = () => {
  return (
    <div className="bg-cloud1 pb-16 relative h-96">
      <div
        className="w-full absolute bg-no-repeat bg-center overflow-visible"
        style={{
          backgroundImage: "url('/Image/process/generativeapp/cloud6.svg')",
          height: "342.5px"
        }}
      ></div>
      <div className="navbar-main pt-24 flex flex-col justify-end h-full pb-4">
        <div className="text-white uppercase text-xs font-semibold">
          <Link href="/" className="mr-1">
            Services
          </Link>
          <span className="">/ Generative AI And ML</span>
        </div>
        <div className="py-1 font-semibold text-cloud6 text-xl md:text-2xl lg:text-5xl">
          Generative AI Applications
        </div>
      </div>
    </div>
  );
};

export default Introduction;
