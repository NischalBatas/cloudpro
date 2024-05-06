
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductioncloudOps } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductioncloudOps}/>
    </div>
  );
};

export default Introduction;
