"use client";
import React from "react";
import { faqGenerativeAI } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqGenerativeAI}/>
    </div>
  );
};

export default Faq;
