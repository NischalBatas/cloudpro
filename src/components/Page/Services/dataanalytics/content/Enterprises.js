import React from "react";
import EnterpriseMain from "../../containers/Enterprises/EnterpriseMain";
import { enterprisesdataAnalytics } from "@/db/services/enterprises";

const Enterprises = () => {
  return (
   <div>
    <EnterpriseMain content={enterprisesdataAnalytics}/>
   </div>
  );
};

export default Enterprises;
