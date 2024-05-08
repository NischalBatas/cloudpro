"use client";
import React from "react";
import { faqGenerativeAI } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductiongenerativeAI } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqGenerativeAI} content2={introductiongenerativeAI}/>
    </div>
  );
};

export default Faq;
