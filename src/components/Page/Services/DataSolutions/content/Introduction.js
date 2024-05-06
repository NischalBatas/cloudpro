
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductiondataPipelineSolutions } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductiondataPipelineSolutions}/>
    </div>
  );
};

export default Introduction;
