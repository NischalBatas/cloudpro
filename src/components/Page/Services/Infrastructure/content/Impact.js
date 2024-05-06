import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactinfrastructure } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactinfrastructure}/>
    </div>
  );
};

export default Impact;
