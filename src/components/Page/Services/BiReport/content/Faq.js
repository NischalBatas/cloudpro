"use client";
import React from "react";
import { faqBIReportAndDashboard } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqBIReportAndDashboard}/>
    </div>
  );
};

export default Faq;
