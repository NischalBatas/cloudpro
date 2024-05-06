"use client";
import React from "react";
import { faqDataPipelineSolutions } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqDataPipelineSolutions}/>
    </div>
  );
};

export default Faq;
