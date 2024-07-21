"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Banner = () => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };
  return (
    <div className="min-h-[358px] footer_width footer_content rounded-[16px] bg-cloud flex justify-between gap-2 flex-wrap md:flex-nowrap">
      <div className="px-[16px] md:pl-[50px] lg:pl-[106px] flex flex-col justify-center gap-1 max-w-[498px] py-6 lg:py-0">
        <div className=" pb-[21px] font-semibold text-[29px] md:text-[32px] leading-[42px] max-w-[468px]">
          Together, let's create something wonderful.
        </div>

        <div className="flex items-center flex-wrap gap-3">
          <button
            onClick={() => {
              handleClick("/contact?action=message");
            }}
            className="bg-black mr-[8px] md:mr-[24px]  px-[12px] py-[10px] md:px-[16px] md:py-[14px] text-cloudText border-b-[3px] border-[#484D5E] rounded-[8px] text-[14px] font-semibold"
          >
            Start working with us
          </button>
          <Link
            href="/contact?action=call"
            className="flex items-center gap-1 text-[16px] text-white hover:opacity-80"
          >
            Book a Free Call <MdOutlineArrowOutward />
          </Link>
        </div>
      </div>

      <div
        className="footer_contanct_user_image min-h-[258px] md:min-h-[358px]"
        style={{
          backgroundImage: "url(/Image/results/newsletter_image.avif)",
        }}
      ></div>
    </div>
  );
};

export default Banner;
