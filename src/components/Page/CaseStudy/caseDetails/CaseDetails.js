import React from "react";

import BreadCrumb from "./Content/BreadCrumb";
import Introduction from "./Content/Introduction";
import BannerOne from "./Content/BannerOne";
import Solution from "./Content/Solution";
import { solution1 } from "@/db/casestudy/content/solution";
import CaseStudyContent from "./Content/CaseStudyContent";
import { caseStudy } from "@/db/casestudy/casestudy";
import Conclusion from "./Content/Conclusion";
import BannerTwo from "./Content/BannerTwo";

const CaseDetails = () => {
  return (
    <div>
      <BreadCrumb />
      <Introduction />
      <BannerOne />
      <Solution content={solution1} />
      <BannerTwo />
      <Conclusion />
      <div className="line-between-content w-full h-[1px] bg-[#F2F2F2]"></div>
      <CaseStudyContent content={caseStudy} />
    </div>
  );
};

export default CaseDetails;
