import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbArrowBackUp, TbShare2 } from "react-icons/tb";

const Introduction = ({posts}) => {
  return (
    <div className="navbar-main pb-4 pt-20 md:pt-36 h-[350px]   relative">
      <div className="main-container  bg-black">
        <Link href='/blog' className="flex items-center gap-3 text-[16px] hover:underline">
          <TbArrowBackUp className="text-[24px]" />
          <span>Back</span>
        </Link>
        <p className="blogs_detail_intro max-w-[650px] pt-[22px] pb-[24px] text-[28px] md:text-[40px] font-semibold md:leading-[54px]">
          {posts?.title}
        </p>

        <div className="bg-[#202020] h-[1px] mt-[20px]"></div>

       
      </div>
    </div>
  );
};

export default Introduction;
