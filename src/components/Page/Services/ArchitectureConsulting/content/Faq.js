"use client";
import React from "react";
import { faqArchitectureConsulting } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqArchitectureConsulting}/>
    </div>
  );
};

export default Faq;
