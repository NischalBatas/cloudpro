import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactgenai } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactgenai}/>
    </div>
  );
};

export default Impact;
