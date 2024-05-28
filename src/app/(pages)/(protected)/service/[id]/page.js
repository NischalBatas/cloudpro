import Footer from "@/components/Footer/Footer";
import CaseStudyContent from "@/components/Page/CaseStudy/caseDetails/Content/CaseStudyContent";
import Introduction from "@/components/Page/Homes/Content/ServiceDetail/Introduction";
import Products from "@/components/Page/Homes/Content/ServiceDetail/Products";
import ServiceType from "@/components/Page/Homes/Content/ServiceDetail/ServiceType";
import Solution from "@/components/Page/Homes/Content/ServiceDetail/Solution";
import Tools from "@/components/Page/Homes/Content/ServiceDetail/Tools";
import { serviceItem } from "@/db/home/serviceItem";
import React from "react";

const page = (props) => {
  let id=props.params.id
  console.log(id)
  
  return (
    <div className="pt-20">
      {serviceItem.filter(item=>item.id == id).map((item2,index)=>{
        return(
          <div key={index}>
        <Introduction item={item2}/>
        <Solution item={item2}/>
        <ServiceType item={item2}/>
        <Tools item={item2}/>
        <CaseStudyContent/>
        <Products/>
        <Footer/>
          </div>
        )
      })}
  
   
    </div>
  );
};

export default page;
