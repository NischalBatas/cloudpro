"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactInfoMain = () => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };
  return (
    <div
      className="bg-[#6083F3] pb-16  w-full bg-no-repeat bg-center"
      style={{
        zIndex: "-3",
        backgroundImage: "url('/Image/process/generativeapp/cloud14.svg')",
        height: "372.5px",
      }}
    >
      <div className="navbar-main pt-24 h-full pb-4" style={{ zIndex: "10" }}>
        <div className="main-container flex flex-col justify-center h-full">
          <div className="max-w-96 text-white text-2xl font-medium">
            Discover more ways our team can help.
          </div>
          <div className="flex items-center flex-wrap gap-3 lg:w-96 mt-4">
            <button
              onClick={() => {
                handleClick("/contactus?tab=tab1");
              }}
              className="bg-black text-white shadow-2xl px-6 py-2 rounded font-medium"
            >
              Contact Us
            </button>
            <Link
              href="/contactus?tab=tab2"
              className="flex gap-1 text-white hover:opacity-80"
            >
              Book a Free Call <MdOutlineArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoMain;
