import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactbireport } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactbireport}/>
    </div>
  );
};

export default Impact;
