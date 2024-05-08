"use client";
import React from "react";
import { faqETLServices } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductionetl } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqETLServices} content2={introductionetl}/>
    </div>
  );
};

export default Faq;
