"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
  const router=useRouter()

  const handleClick=(path)=>{
    router.push(path)
  }
  return (
    <div className="h-48 flex flex-col justify-center mb-10 md:mb-0">
      <div className="flex justify-between gap-6 md:gap-1 flex-wrap items-center">
        <div className="">
          <Link href="/">
            <Image
              width={120}
              height={120}
              alt="company_logo"
              src="/Image/logo/logo-white.svg"
            />
            {/* <span className="text-cloud font-semibold">CLOUDPro</span>.ai */}
          </Link>
          <div className="max-w-[468px] pt-6 py-3 lg:py-0 font-semibold text-2xl">
          Together, let's create something wonderful.
        </div>
        </div>
       
        <div className="flex items-center gap-3 lg:w-96 ">
          <button onClick={()=>{handleClick('/contactus')}} className="bg-cloudBtn text-white px-2 py-1 rounded font-medium">
          Start working with us
          </button>
          <span className="flex gap-1 text-white">
            Book a Free Call <MdOutlineArrowOutward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
