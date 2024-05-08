"use client";
import React from "react";
import { faqDataPipelineSolutions } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductiondataPipelineSolutions } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqDataPipelineSolutions} content2={introductiondataPipelineSolutions}/>
    </div>
  );
};

export default Faq;
