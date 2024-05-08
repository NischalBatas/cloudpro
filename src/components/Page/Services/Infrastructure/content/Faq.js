"use client";
import React from "react";
import { faqInfrastructureMigration } from "@/db/services/faq";
import FaqMain from "../../containers/Faq/FaqMain";
import { introductioninfrastructureMigrationUpgrades } from "@/db/services/introduction";

const Faq = () => {
  return (
    <div>
        <FaqMain content={faqInfrastructureMigration} content2={introductioninfrastructureMigrationUpgrades}/>
    </div>
  );
};

export default Faq;
