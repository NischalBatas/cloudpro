"use client";
import React from "react";
import { faqCloudOps } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductionbiReportDashboard, introductioncloudOps } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqCloudOps} content2={introductioncloudOps}/>
    </div>
  );
};

export default Faq;
