import React from "react";
import EnterpriseMain from "../../containers/Enterprises/EnterpriseMain";
import { enterprisesbigData } from "@/db/services/enterprises";

const Enterprises = () => {
  return (
   <div>
    <EnterpriseMain content={enterprisesbigData}/>
   </div>
  );
};

export default Enterprises;
