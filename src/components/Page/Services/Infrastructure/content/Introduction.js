
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductioninfrastructureMigrationUpgrades } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductioninfrastructureMigrationUpgrades}/>
    </div>
  );
};

export default Introduction;
