"use client";
import React from "react";
import { faqDataLakesAndWarehouses } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqDataLakesAndWarehouses}/>
    </div>
  );
};

export default Faq;
