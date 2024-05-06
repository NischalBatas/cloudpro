import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactbigdata } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactbigdata}/>
    </div>
  );
};

export default Impact;
