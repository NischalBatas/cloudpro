import React from "react";
import EnterpriseMain from "../../containers/Enterprises/EnterpriseMain";
import { enterprisesadhoc } from "@/db/services/enterprises";

const Enterprises = () => {
  return (
   <div>
    <EnterpriseMain content={enterprisesadhoc}/>
   </div>
  );
};

export default Enterprises;
