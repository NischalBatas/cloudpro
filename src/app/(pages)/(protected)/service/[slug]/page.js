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
  let slug=props.params.slug
  console.log(slug)
  
  return (
    <div className="pt-20">
      {serviceItem.filter(item=>item.slug == slug).map((item2,index)=>{
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




export async function generateMetadata(props){
  let slug=props.params.slug
  const service = serviceItem.find(item => item.slug === slug);

  if (!service) {
    return {};
  }
  
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}${service.introduction.image}`;

  return {
    title: service.title,
    description: service.introduction.description,
    image: imageUrl,
    openGraph: {
      title: service.title,
      description: service.introduction.description,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: service.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.introduction.description,
      creator: service.title,
      images: [
        {
          url: imageUrl, // Must be an absolute URL
          alt: service.title,
        },
      ],
    },
  };
}