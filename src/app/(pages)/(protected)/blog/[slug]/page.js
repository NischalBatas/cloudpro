import Footer from '@/components/Footer/Footer';
import BlogDetails from '@/components/Page/Blog/BlogDetails/BlogDetails'
import BlogImage from '@/components/Page/Blog/BlogDetails/Content/BlogImage';
import Introduction from '@/components/Page/Blog/BlogDetails/Content/Introduction';
import CaseStudyContent from '@/components/Page/CaseStudy/caseDetails/Content/CaseStudyContent';
import Newsletter from '@/components/Page/CaseStudy/caseDetails/Content/Newsletter';
import React from "react";
import '../../../../../components/Page/Blog/BlogDetails/Content/blog_detail.css'

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


const page = async(props) => {
  let slugs = props.params.slug;
  const posts = await getSinglePost(slugs);
  console.log("Method",props);
  return (
    <div>
        <div>
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
        {/* <BlogDetails props={props}/> */}
    </div>
  )
}

export default page

export async function generateMetadata(props){
  const post = await  getSinglePost(props.params.slug);

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.blogfield.description,
    image:post.featuredImage.node.link,
    openGraph: {
      title: post.title,
      description:
        post.blogfield.description,

      images:
        {
          url: post.featuredImage.node.link, // Must be an absolute URL
          width: 200,
          height: 200,
          alt: post.title,
        },
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: post.title,
      title: post.title,
      description:
      post.blogfield.description,
      creator: post.title,
      images: {
        url: post.featuredImage.node.link, // Must be an absolute URL
        alt: post.title,
      },
    },
  }
}