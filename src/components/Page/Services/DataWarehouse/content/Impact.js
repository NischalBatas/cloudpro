import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactdatawarehouse } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactdatawarehouse}/>
    </div>
  );
};

export default Impact;
