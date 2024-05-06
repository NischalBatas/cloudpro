"use client";
import React from "react";
import { faqInfrastructureMigration } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqInfrastructureMigration}/>
    </div>
  );
};

export default Faq;
