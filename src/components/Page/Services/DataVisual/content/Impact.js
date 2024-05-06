import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactdatavisual } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactdatavisual}/>
    </div>
  );
};

export default Impact;
