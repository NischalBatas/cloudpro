
import React from "react";
import "../../services.css";
import IntroductionMain from "../../containers/Introduction/IntroductionMain";
import { introductiondataLakesWarehouses } from "@/db/services/introduction";
const Introduction = () => {

  return (
    <div>
      <IntroductionMain content={introductiondataLakesWarehouses}/>
    </div>
  );
};

export default Introduction;
