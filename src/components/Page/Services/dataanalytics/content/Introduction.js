
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductiondataAnalytics } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductiondataAnalytics}/>
    </div>
  );
};

export default Introduction;
