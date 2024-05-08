"use client";
import React from "react";
import { faqBigDataConsulting } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductionbigDataConsulting } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqBigDataConsulting} content2={introductionbigDataConsulting}/>
    </div>
  );
};

export default Faq;
