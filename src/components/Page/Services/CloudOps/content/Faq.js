"use client";
import React from "react";
import { faqCloudOps } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqCloudOps}/>
    </div>
  );
};

export default Faq;
