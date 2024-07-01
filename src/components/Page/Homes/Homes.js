
import React from "react";
import Introduction from "./Content/Introduction";
import Partners from "./Content/Partners";
import Service from "./Content/Service";
import Features from "./Content/Features";
import Industries from "./Content/Industries";

import Testominial from "./Content/Testominial";
import Results from "../About/content/Results";
import CaseStudy from "./Content/CaseStudy";
import Product from "./Content/Product";

import './Content/animation.css'

const Homes = () => {
  return (
    <div className="pt-20">


      <Introduction />
      <Partners />
   
      <Service />
      {/* <Features /> */}
      <Industries />
      <Testominial />
      {/* <Results /> */}
      <CaseStudy />
      <Product/>

 
    </div>
  );
};

export default Homes;
