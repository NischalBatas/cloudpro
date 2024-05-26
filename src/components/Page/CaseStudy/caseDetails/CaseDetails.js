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
import Technology from "./Content/Technology/Technology";
import { impactAndResult1 } from "@/db/casestudy/content/impactAndResult";
import { technology1 } from "@/db/casestudy/content/technology";
import Link from "next/link";
import Tabs from "./Content/Tabs";

import Loading from "./Loading";
import Newsletter from "./Content/Newsletter";
import Footer from "@/components/Footer/Footer";


export async function getSinglePost(slug) {
  const query = `
    query caseStudyBySlug {
      casestudyBy(slug: "${slug}") {
            casestudyfieldgroud {
              conclusion
              introduction
              readTime
              solution
              technology
              uploadDate
              herotext
              impactandresult
              backgroundImage {
                node {
                  altText
                  sourceUrl
                }
              }
              caseStudyImage {
                node {
                  altText
                  sourceUrl
                }
              }
              caseStudySector
              caseStudySectorDescription
            }
            date
            title
            slug
            content(format: RENDERED)
      
      }
    }
  `;

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();

  return data.casestudyBy;
}

const CaseDetails = async ({ props }) => {
  let slugs = props.params.slug;
  const posts = await getSinglePost(slugs);
  // console.log("Method", posts);
  


  
    
  return (
    <div className="">
      {posts ? (
        <>
     
          <BreadCrumb caseData={posts} />
          {/* <div className="main-container" dangerouslySetInnerHTML={{__html:posts.content}}></div> */}
          <Tabs />
          <Introduction caseData={posts} />
          <BannerOne caseData={posts} />
          <Solution caseData={posts} content={solution1} />
          <Technology caseData={posts} content={technology1} />
          <BannerTwo caseData={posts} content={impactAndResult1} />
          <Conclusion caseData={posts} />

          <div className="line-between-content w-full h-[1px] bg-[#F2F2F2]"></div>
          <CaseStudyContent content={caseStudy} />
          <Newsletter />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CaseDetails;
