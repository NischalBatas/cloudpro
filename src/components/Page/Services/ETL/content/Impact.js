import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactadhoc } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactadhoc}/>
    </div>
  );
};

export default Impact;
