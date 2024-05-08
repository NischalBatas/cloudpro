"use client";
import React from "react";
import { faqDataAnalytics } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductiondataAnalytics } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqDataAnalytics} content2={introductiondataAnalytics}/>
    </div>
  );
};

export default Faq;
