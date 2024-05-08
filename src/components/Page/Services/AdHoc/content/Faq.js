"use client";
import React from "react";
import { faqAdHocReportingSolutions } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductionAdhoc } from "@/db/services/introduction";
const Faq = () => {
  return (
    <div>
        <FaqMain content={faqAdHocReportingSolutions} content2={introductionAdhoc}/>
    </div>
  );
};

export default Faq;
