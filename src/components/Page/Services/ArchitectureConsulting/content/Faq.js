"use client";
import React from "react";
import { faqArchitectureConsulting } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductionarchitectureConsulting } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqArchitectureConsulting} content2={introductionarchitectureConsulting}/>
    </div>
  );
};

export default Faq;
