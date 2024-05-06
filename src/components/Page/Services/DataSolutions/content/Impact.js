import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactdatasolutions } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactdatasolutions}/>
    </div>
  );
};

export default Impact;
