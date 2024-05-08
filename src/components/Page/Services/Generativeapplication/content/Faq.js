"use client";
import React from "react";
import { faqGenerativeAI } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductiongenerativeAIApplications } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqGenerativeAI} content2={introductiongenerativeAIApplications}/>
    </div>
  );
};

export default Faq;
