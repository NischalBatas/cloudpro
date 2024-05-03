import React from "react";
import Results from "./content/Results";
import Introduction from "./content/Introduction";
import Mission from "./content/Mission";
import ProfifleMessage from "./content/ProfifleMessage";
import ContactInfo from "./content/ContactInfo";
import { motion } from "framer-motion";
const About = () => {

  return (
    <div className="">
      <Introduction />
      
{/* <motion.div
animate={{ rotate: [0, 200, 200, 0], x: [0, 200, 200,0]}}
transition={{ repeat: Infinity, duration: 1 }}
><div className="example-container h-screen w-20 bg-blue-800"></div> </motion.div> */}

      <Mission />
      <Results />
      <ProfifleMessage />
      <ContactInfo/>
   

    </div>
  );
};

export default About;
