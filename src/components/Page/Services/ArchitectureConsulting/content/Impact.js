import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactArchitecture } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactArchitecture}/>
    </div>
  );
};

export default Impact;
