"use client";
import MobileNavigation from "@/components/Navbar/MobileMenu/MobileNavigation";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <>
      <Navbar />
      <MobileNavigation />
      <div className="navbar-main flex justify-between flex-wrap md:flex-nowrap items-center h-screen">
        <div>
          <span className="text-[42px] font-semibold tracking-wider leading-[3.2rem] max-w-[220px]">
            Page Under <p className="text-[#6083f3]">Maintenance</p>
          </span>

          <p className="max-w-[550px] my-6 text-[15px] text-[#aeb4b4]">
            We apologize for the inconvenience, but our page is currently
            undergoing maintenance to enhance your browsing experience. Please
            bear with us as we work diligently to bring you a better, smoother,
            and more efficient online platform. During this period of
            maintenance, you may experience temporary disruptions in accessing
            our page and its services. Rest assured, our team is working
            tirelessly behind the scenes to resolve any issues and implement
            necessary updates. Thank you for your patience.
          </p>
          <Link
            href="/"
            className="bg-[#6083f3] rounded-md py-2 px-6 mt-20 hover:opacity-80"
          >
            Go To Home Page
          </Link>
        </div>
        <Image width={400} height={400} src="/404.svg" alt="404 page" />
      </div>
    </>
  );
};

export default notfound;
