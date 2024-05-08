"use client";
import React from "react";
import { faqGenerativeAI } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductiondataVisualizationSolutions } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqGenerativeAI} content2={introductiondataVisualizationSolutions}/>
    </div>
  );
};

export default Faq;
