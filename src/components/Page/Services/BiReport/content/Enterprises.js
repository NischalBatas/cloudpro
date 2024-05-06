import React from "react";
import EnterpriseMain from "../../containers/Enterprises/EnterpriseMain";
import { enterprisesBireport } from "@/db/services/enterprises";

const Enterprises = () => {
  return (
   <div>
    <EnterpriseMain content={enterprisesBireport}/>
   </div>
  );
};

export default Enterprises;
