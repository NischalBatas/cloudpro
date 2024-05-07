import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";

const BreadCrumb = () => {
  return (
    <div className="flex flex-col justify-end h-[420px] md:h-[504px]  bg-no-repeat bg-center bg-cover"   style={{
        // filter: "blur(2px)",
        zIndex: "-1",
        backgroundImage: "url('/Image/casestudy/bg1.webp')"}}
      >
   <div className="navbar-main">
  <div className="main-container">
  <div className="pt-12">
      <p className="text-[14px] text-[#6083F3] font-semibold uppercase tracking-wider">CaseStudy</p>
      <p className="mt-2 text-[24px] md:text-[32px] font-semibold max-w-[615px]">
        Transforming Healthcare Operations with Amazon Web Services
      </p>
    </div>
    <div className="flex items-center justify-between mt-28 pb-5">
      <div className="flex gap-6 text-[14px] text-[#BDBDBD]">
          <span>May 6, 2023</span>
          <span className="flex items-center gap-1"><FaRegClock /> 5 min Read</span>
      </div>
      <div className="flex gap-5 text-[22px]">
    <Link href='/' className="hover:bg-white hover:text-[#0073ae] rounded-md"><CiLinkedin /></Link>
    <Link href='/' className="hover:bg-white hover:text-[#0469de] rounded-full"><RiFacebookCircleLine /></Link>
    <Link href='/' className="hover:text-[black] "><RiTwitterXLine /></Link>
      </div>
    </div>
  </div>
   </div>
  </div>
  )
}

export default BreadCrumb