"use client";
import React from "react";
import { faqBigDataConsulting } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqBigDataConsulting}/>
    </div>
  );
};

export default Faq;
