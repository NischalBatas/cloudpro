"use client";
import React from "react";
import { faqAdHocReportingSolutions } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqAdHocReportingSolutions}/>
    </div>
  );
};

export default Faq;
