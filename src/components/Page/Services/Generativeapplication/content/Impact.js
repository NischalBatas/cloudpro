import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactgenapplication } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactgenapplication}/>
    </div>
  );
};

export default Impact;
