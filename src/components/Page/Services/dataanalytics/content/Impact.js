import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactdataanalytics } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactdataanalytics}/>
    </div>
  );
};

export default Impact;
