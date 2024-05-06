
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductiongenerativeAIApplications } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductiongenerativeAIApplications}/>
    </div>
  );
};

export default Introduction;
