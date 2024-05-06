import React from "react";
import ImpactMain from "../../containers/Impact/ImpactMain";
import { impactetl } from "@/db/services/impacts";

const Impact = () => {
  return (
   <div>
    <ImpactMain content={impactetl}/>
    </div>
  );
};

export default Impact;
