import React from "react";
import Results from "./content/Results";
import Introduction from "./content/Introduction";
import Mission from "./content/Mission";
import ProfifleMessage from "./content/ProfifleMessage";
import ContactInfo from "./content/ContactInfo";

const About = () => {

  return (
    <div className="">
      <Introduction />
      <Mission />
      <Results />
      <ProfifleMessage />
      <ContactInfo/>
    </div>
  );
};

export default About;
