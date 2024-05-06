"use client";
import React from "react";
import { faqETLServices } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqETLServices}/>
    </div>
  );
};

export default Faq;
