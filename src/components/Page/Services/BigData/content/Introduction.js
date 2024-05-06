
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductionbigDataConsulting } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductionbigDataConsulting}/>
    </div>
  );
};

export default Introduction;
