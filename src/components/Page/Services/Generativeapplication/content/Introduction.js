import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
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
          filter: "blur(5px)",
          zIndex: "-1",
          backgroundImage: "url('/Image/service-bg/8.webp')",
        }}
      ></div>
      <div className="navbar-main pt-24 h-full pb-4 " style={{ zIndex: "11" }}>
        <div className="main-container flex flex-col justify-end h-full">
          <div className="text-cloud uppercase text-[12px] tracking-wildest mb-6">
            <Link href="/" className="mr-1">
              Services
            </Link>
            <span className="">/ Generative AI and Applications </span>
          </div>
          <p className="py-1 max-w-[691px]  font-semibold text-white text-xl md:text-2xl lg:text-4xl mb-3">
            Generative AI and Applications
          </p>
          <div className="text-[14px] max-w-[691px] mb-8">
            Discover the power of Generative AI based applications on your
            industry. Equip your technology infrastructure with the
            state-of-the-art LLM models to efficiently manage customer
            interaction, document flow and process automation. Acclerate your
            business growth potential, adopt innovative solutions and unlock new
            avenues of revenue growth with cloudpro ai's Generative AI
            solutions. 
          </div>

          <div>
            <button className="bg-cloud rounded px-2 py-3 w-auto text-[14px]">
             Build with us  
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
