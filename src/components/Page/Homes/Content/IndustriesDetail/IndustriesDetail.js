import React from "react";
import IndustriesTab from "./IndustriesTab/IndustriesTab";
import Introduction from "./Introduction/Introduction";
import IndustriesService from "./IndustriesService/IndustriesService";
import Banner from "./Banner/Banner";
import Footer from "@/components/Footer/Footer";
import IndustriesServiceReason from "./IndustriesServiceReasons/IndustriesServiceReason";
import Product from "../Product";
import CaseStudyContent from "@/components/Page/CaseStudy/caseDetails/Content/CaseStudyContent";
import { industriesDetails } from "@/db/home/industriesDetail/industriesDetail";

const IndustriesDetail = ({id}) => {
 
  console.log(id)
  return (
    <div className="pt-16">
      {industriesDetails.filter(items=>items.id == id).map((item, index) => {
        return (
          <div key={index}>
            <IndustriesTab item={id}/>
            <Introduction item={item}/>
            <IndustriesService item={item}/>
            <Banner item={item}/>
            <IndustriesServiceReason item={item.reasons}/>
            <CaseStudyContent />
            <Product />
            <Footer />
          </div>
        );
      })}
    </div>
  );
};

export default IndustriesDetail;
