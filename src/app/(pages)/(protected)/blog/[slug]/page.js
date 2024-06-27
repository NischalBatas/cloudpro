import Footer from "@/components/Footer/Footer";
import BlogImage from "@/components/Page/Blog/BlogDetails/Content/BlogImage";
import Introduction from "@/components/Page/Blog/BlogDetails/Content/Introduction";
import CaseStudyContent from "@/components/Page/CaseStudy/caseDetails/Content/CaseStudyContent";
import Newsletter from "@/components/Page/CaseStudy/caseDetails/Content/Newsletter";
import React from "react";
import "../../../../../components/Page/Blog/BlogDetails/Content/blog_detail.css";

export async function getSinglePost(slug) {
  const query = `
  query GetBlogBySlug {
    blogBy(slug: "${slug}") {
      content(format: RENDERED)
      slug
      title
      date
      blogfield {
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

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 50 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.statusText}`);
      return null;
    }

    const { data } = await res.json();

    if (!data) {
      console.error("No data returned from the API");
      return null;
    }

    console.log("Fetched data:", data); // Log fetched data
    return data.blogBy;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const Page = async (props) => {
  const slugs = props.params.slug;
  const post = await getSinglePost(slugs);

  console.log("Props:", props); // Log props
  console.log("Post:", post); // Log post data

  return (
    <div>
      {post ? (
        <>
          <Introduction posts={post} />
          <BlogImage posts={post} />
          <div className="bg-white navbar-main">
            <div
              className="main-container wordpress-container py-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
          <div className="w-full h-[1px] bg-[#e6e6e6]"></div>
          <Newsletter />
          <CaseStudyContent />
          <Footer />
        </>
      ) : (
        "No data"
      )}
    </div>
  );
};

export default Page;

export async function generateMetadata(props) {
  const post = await getSinglePost(props.params.slug);

  if (!post) {
    return {};
  }
  const canonicalUrl = `${process.env.NEXT_PUBLIC_CLOUDPRO_URL}/blog/${props.params.slug}`;

  return {
    title: post.title,
    description: post.blogfield.description,
    openGraph: {
      title: post.title,
      description: post.blogfield.description,
      images: {
        url: post.featuredImage.node.link,
        width: 200,
        height: 200,
        alt: post.title,
      },
      locale: "en_US",
      type: "website",
      url: canonicalUrl,
    },
    twitter: {
      card: post.title,
      title: post.title,
      description: post.blogfield.description,
      creator: post.title,
      images: {
        url: post.featuredImage.node.link,
        alt: post.title,
      },
    },
  };
}
