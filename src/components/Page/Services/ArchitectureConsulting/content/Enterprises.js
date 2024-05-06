import React from "react";
import EnterpriseMain from "../../containers/Enterprises/EnterpriseMain";
import { enterprisesarchitecture } from "@/db/services/enterprises";

const Enterprises = () => {
  return (
   <div>
    <EnterpriseMain content={enterprisesarchitecture}/>
   </div>
  );
};

export default Enterprises;
