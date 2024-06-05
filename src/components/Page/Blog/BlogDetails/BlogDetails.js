import React from "react";

import Introduction from "./Content/Introduction";
import BlogImage from "./Content/BlogImage";
import CaseStudyContent from "../../CaseStudy/caseDetails/Content/CaseStudyContent";
import Footer from "@/components/Footer/Footer";
import Newsletter from "../../CaseStudy/caseDetails/Content/Newsletter";
import './Content/blog_detail.css'
import Head from "next/head";
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
    next:{revalidate:50}
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
       <Head>
        <title>{posts.title}</title>
        <meta name="description" content={posts.blogfield.description} />
        <meta property="og:title" content={posts.title} />
        <meta property="og:description" content={posts.blogfield.description} />
        <meta property="og:image" content={posts.featuredImage.node.link} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${posts.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
            {posts ? (
        <>
        <Introduction posts={posts}/>
        <BlogImage  posts={posts}/>
        <div className="bg-white navbar-main">
        <div className="main-container  wordpress-container py-10" dangerouslySetInnerHTML={{__html:posts.content}}></div>
        </div>
        <div className="w-full h-[1px] bg-[#e6e6e6]"></div>
<Newsletter/>
<CaseStudyContent/>
<Footer/>
        </>) : 'No data'}
    </div>
  );
};

export default BlogDetails;


