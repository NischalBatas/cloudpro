import React from "react";

import Introduction from "./Content/Introduction";
import BlogImage from "./Content/BlogImage";
import CaseStudyContent from "../../CaseStudy/caseDetails/Content/CaseStudyContent";
import Footer from "@/components/Footer/Footer";

export async function getSinglePost(slug) {
  const query = `
    query caseStudyBySlug {
      casestudyBy(slug: "introduction") {
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


const BlogDetails = async({props}) => {
  let slugs = '1';
  const posts = await getSinglePost(slugs);
  console.log("Method", posts);

  return (
    <div>
            {posts ? (
        <>
        <Introduction/>
        {/* <BlogImage/> */}
        <div className="main-container wordpress-container py-10" dangerouslySetInnerHTML={{__html:posts.content}}></div>
<CaseStudyContent/>
<Footer/>
        </>) : 'No data'}
    </div>
  );
};

export default BlogDetails;
