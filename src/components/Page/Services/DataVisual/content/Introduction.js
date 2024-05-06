
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductiondataVisualizationSolutions } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductiondataVisualizationSolutions}/>
    </div>
  );
};

export default Introduction;
