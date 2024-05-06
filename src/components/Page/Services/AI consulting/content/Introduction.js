
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductionaiConsulting } from "@/db/services/introduction";

const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductionaiConsulting}/>
    </div>
  );
};

export default Introduction;
