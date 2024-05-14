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
    <div className="min-h-[125px] bg-[#121212] flex flex-col justify-center mb-10 md:mb-0">
      <div className="footer_width flex justify-between gap-4 md:gap-1 flex-wrap items-center ">
 
          {/* <Link href="/">
            <Image className="mb-2"
              width={120}
              height={120}
              alt="company_logo"
              src="/Image/logo/logo-white.svg"
            />
          </Link> */}
          <div className=" pt-6 py-3 lg:py-0 font-semibold text-2xl">
          Together, let's create something wonderful.
        </div>
    
       
        <div className="flex lg:justify-end items-center flex-wrap gap-3 max-lg:w-96 pb-8 md:pb-0">
          <button onClick={()=>{handleClick('/contactus')}} className="bg-cloudBtn main_button px-5 py-2 text-cloudText rounded-[8px] text-[14px] font-medium">
          Start working with us
          </button>
          <Link href='/contactus' className="flex gap-1 text-white hover:opacity-80">
            Book a Free Call <MdOutlineArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
