
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductionarchitectureConsulting } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductionarchitectureConsulting}/>
    </div>
  );
};

export default Introduction;
