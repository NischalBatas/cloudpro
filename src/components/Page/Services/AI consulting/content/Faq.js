"use client";
import React from "react";
import { faqAIConsulting } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductionaiConsulting } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqAIConsulting} content2={introductionaiConsulting}/>
    </div>
  );
};

export default Faq;
