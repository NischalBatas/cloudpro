import React from "react";
import Results from "./content/Results";
import Introduction from "./content/Introduction";
import Mission from "./content/Mission";
import ProfifleMessage from "./content/ProfifleMessage";
import ContactInfo from "./content/ContactInfo";
import Testominial from "../Homes/Content/Testominial";

const About = () => {

  return (
    <div className="">
    
      <Introduction />
      <Mission />
      <Results />
      <Testominial/>
      <ProfifleMessage />
      {/* <ContactInfo/> */}
   

    </div>
  );
};

export default About;
