import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./casestudy.css";
import Loading from "./Loading";
import Newsletter from "./caseDetails/Content/Newsletter";
import Footer from "@/components/Footer/Footer";


async function getPosts() {
  const query = `query caseStudies {
            caseStudies(where: {orderby: {field: DATE, order: DESC}}) {
              edges {
                node {
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
                  casestudyId
                  slug
                }
              }
            }
          }`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await res.json();

  return data.caseStudies.edges;
}

const CaseStudy = async({posts}) => {

  console.log("Blog Component - Post details", posts);
  return (
   <>
   {posts ? 
    <div>
    <div className="h-[420px] md:h-[504px]  pt-12 pb-12 text-center  flex flex-col justify-center items-center">
      <p className="text-[32px] md:text-[48px] font-bold">Case Studies</p>
      <p className="py-2 md:p-0 text-[12px] md:text-[14px] md:leading-6 max-w-[514px] text-[#bebebe]">
        We're Gen AI-Ready and Eager to Collaborate. Let's Assess Your
        Business and Infrastructure Readiness for the Ultimate Technological
        Leap.
      </p>
    </div>

    <div className="navbar-main bg-white ">
      <div className="main-container relative bottom-28  grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 my-6">
        {posts.map((item, index) => {
          return (
         <div  key={index}>
             <Link href={`/case-studies/${item.node.slug}`} className="">
              <div
               
                className="md:max-w-[324px] casestudy_product_container"
              >
                <div
                  className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
                  style={{
                    backgroundImage: `url(${item.node.casestudyfieldgroud.backgroundImage.node.sourceUrl})`,
                  }}
                >
                  <div className="flex justify-between  px-4 pt-4  ">
                    <div className="text-white text-base  font-medium w-44">
                      {item.node.casestudyfieldgroud.caseStudySectorDescription}
                    </div>
                    <div className="casestudy_product_arrow">
                      <MdOutlineArrowOutward className="casestudy_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 items-center text-xs mt-3 text-white">
                  <div className="bg-cloud px-2 rounded-full py-1">
                    {item.node.casestudyfieldgroud.caseStudySector}
                  </div>
                  <div className="text-[10px] text-[#909090] tracking-wider">
                    {item.node.casestudyfieldgroud.readTime} Read
                  </div>
                </div>

                <div className="my-4">
                  <div className="casestudy_product_title font-semibold text-[16px] text-[#000]">
                    {item.node.title}
                  </div>
                  <div className="casestudy_product_description mt-2 text-[14px] text-[#666666] leading-6">
                    {item.node.casestudyfieldgroud.introduction}
                  </div>
                </div>
              </div>
            </Link>
         </div>
          );
        })}
      </div>
    </div>

    <Newsletter/>
      <Footer/>

  </div>
  : (<Loading/>)}
   </>
  );
};

export async function getStaticProps(){
  const posts=await getPosts()
  console.log('Data getStatic',posts)
  return{
    props:{
      posts
    },
    revalidate: 50, // In seconds
  }
}


export default CaseStudy;
