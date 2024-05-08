"use client";
import React from "react";
import { faqBIReportAndDashboard } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductionbiReportDashboard } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqBIReportAndDashboard} content2={introductionbiReportDashboard}/>
    </div>
  );
};

export default Faq;
