import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactcloudops } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactcloudops}/>
    </div>
  );
};

export default Impact;
