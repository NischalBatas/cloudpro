"use client";
import React from "react";
import { faqAIConsulting } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqAIConsulting}/>
    </div>
  );
};

export default Faq;
