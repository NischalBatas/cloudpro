"use client";
import React from "react";
import { faqDataLakesAndWarehouses } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductiondataLakesWarehouses } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqDataLakesAndWarehouses} content2={introductiondataLakesWarehouses}/>
    </div>
  );
};

export default Faq;
