import React from "react";

import Introduction from "./Content/Introduction";
import BlogImage from "./Content/BlogImage";
import CaseStudyContent from "../../CaseStudy/caseDetails/Content/CaseStudyContent";
import Footer from "@/components/Footer/Footer";

export async function getSinglePost(slug) {
  const query = `
  query GetBlogBySlug {
    blogBy(slug: "${slug}") {
      content(format: RENDERED)
      slug
      title
      date
      blogfield{
        blogcategory
        description
        readTime     
      }
      featuredImage {
        node {
          altText
          link
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

  return data.blogBy;
}


const BlogDetails = async({props}) => {
  let slugs = props.params.slug;
  const posts = await getSinglePost(slugs);
  console.log("Method", posts,slugs);

  return (
    <div>
            {posts ? (
        <>
        <Introduction posts={posts}/>
        <BlogImage  posts={posts}/>
        <div className="bg-white navbar-main">
        <div className="main-container  wordpress-container py-10" dangerouslySetInnerHTML={{__html:posts.content}}></div>
        </div>
        <div className="w-full h-[1px] bg-[#e6e6e6]"></div>
<CaseStudyContent/>
<Footer/>
        </>) : 'No data'}
    </div>
  );
};

export default BlogDetails;
