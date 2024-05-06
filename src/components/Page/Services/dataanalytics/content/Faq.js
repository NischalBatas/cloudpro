"use client";
import React from "react";
import { faqDataAnalytics } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqDataAnalytics}/>
    </div>
  );
};

export default Faq;
