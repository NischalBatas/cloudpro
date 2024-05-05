"use client"
import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { FaAngleDown } from "react-icons/fa6";

import { IoChevronDownCircleOutline } from "react-icons/io5";
import { faqApp } from "@/db/faq";
import FaqMain from "../../FaqMain";

const Faq = () => {
  return (
    <div className="navbar-main py-20 ">
          <div className="main-container flex justify-between flex-wrap gap-2">
      <div className="w-[219px]">
        <p className="font-bold text-[36px] w-[219px]">FAQ</p>
        <p className="text-[16px] text-[#BCBCBC] max-w-[219px] tracking-normal">Generative AI & Applications</p>
      </div>
      <FaqMain faqApp={faqApp}/>
</div>
    </div>
  );
};


export default Faq;
