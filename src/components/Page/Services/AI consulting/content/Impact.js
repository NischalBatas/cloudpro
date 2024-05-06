import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactAlConsulting } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactAlConsulting}/>
    </div>
  );
};

export default Impact;
