// import Link from "next/link";
// import React from "react";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import Loading from "./Loading";
// import "./blog.css";
// import Footer from "@/components/Footer/Footer";
// import Newsletter from "../CaseStudy/caseDetails/Content/Newsletter";
// import Pagination from "./Pagination/Pagination";

// async function getPosts() {
//   const query = `query GetAllBlogPost {
//     blogs(first:50) {
//       nodes {
//         slug
//         title
//         date
//         featuredImage {
//           node {
//             altText
//             link
//           }
//         }
//         blogfield {
//           blogcategory
//           description
//           readTime
//         }
//       }
//          pageInfo {
//       endCursor
//       hasNextPage
//       hasPreviousPage
//       startCursor
//     }
//     }
//   }`;

//   const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//     next:{revalidate: 50}
//   });

//   const { data } = await res.json();
//   console.log(data)
//   return data.blogs;
// }

// const Blog = async () => {
//   const apiFetchData = await getPosts();
//   const posts=apiFetchData.nodes
//   // console.log("Blog Components - Post details", posts);
//   return (
//     <>
//       {posts ? (
//         <div>
//           <div className="h-[420px] md:h-[504px]  pt-12 pb-12 text-center  flex flex-col justify-center items-center">
//             <p className="text-[32px] md:text-[48px] font-bold">Blogs</p>
//             <p className="py-2 md:p-0 text-[12px] md:text-[14px] md:leading-6 max-w-[514px] text-[#bebebe]">
//               We're prepared for the era of Generative AI and excited to
//               collaborate. Let's evaluate your business and infrastructure to
//               ensure you're ready for this significant technological
//               advancement.
//             </p>
//           </div>

//           <div className="navbar-main bg-white ">
//             <div className="main-container relative bottom-28  grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 my-6">
//             {posts.map((item, index) => {
//                 return (
//                   <div key={index}>
//                     <Link href={`/blog/${item.slug}`} className="">
//                       <div className="md:max-w-[324px] blogs_product_container">
//                         <div
//                           className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
//                           style={{
//                             backgroundImage: `url(${item.featuredImage ? item.featuredImage.node.link :'/image/service-bg/1.webp'})`,
//                           }}
//                         >
//                           <div className="flex justify-between  px-4 pt-4  ">
//                             <div className="text-white text-base  font-medium w-44">
//                               {item.blogfield ? item.blogfield.blogcategory : 'no data'}
//                             </div>
//                             <div className="blogs_product_arrow">
//                               <MdOutlineArrowOutward className="blogs_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex gap-2 items-center text-xs mt-3 text-white">
//                           <div className="bg-cloud px-2 rounded-full py-1">
//                           {item.blogfield ? item.blogfield.blogcategory : 'no data'}
//                           </div>
//                           <div className="text-[10px] text-[#909090] tracking-wider">
//                           {item.blogfield ? item.blogfield.readTime : 'no data'} Read
//                           </div>
//                         </div>

//                         <div className="my-4">
//                           <div className="blogs_product_title font-semibold text-[16px] text-[#000]">
//                             {item ? item.title : 'no data'}
//                           </div>
//                           <div className="blogs_product_description mt-1 text-[14px] text-[#666666] leading-6">
//                             {item.blogfield ? item.blogfield.description : 'no data'}
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 );
//               })}
//             </div>
        
//           </div>

//           <Newsletter contentType="Blog"/>
//           <Footer />
        
//         </div>
//       ) : (
//         <Loading />
//       )}
//     </>
//   );
// };

// export default Blog;

"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Loading from "./Loading";
import "./blog.css";
import Footer from "@/components/Footer/Footer";
import Newsletter from "../CaseStudy/caseDetails/Content/Newsletter";

const getPosts = async (cursor = null) => {
  const query = `query GetAllBlogPost($cursor: String) {
    blogs(first: 6, after: $cursor) {
      nodes {
        slug
        title
        date
        featuredImage {
          node {
            altText
            link
          }
        }
        blogfield {
          blogcategory
          description
          readTime
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    mode:'no-cors',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { cursor } }),
    next: { revalidate: 50 }
  });

  const { data } = await res.json();
  return data.blogs;
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchPosts = async (cursor = null, append = false) => {
    if (!append) setLoading(true);
    const apiFetchData = await getPosts(cursor);
    setPosts((prevPosts) => (append ? [...prevPosts, ...apiFetchData.nodes] : apiFetchData.nodes));
    setPageInfo(apiFetchData.pageInfo);
    setLoading(false);
    setLoadingMore(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);
    fetchPosts(pageInfo.endCursor, true);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="h-[420px] md:h-[504px] pt-12 pb-12 text-center flex flex-col justify-center items-center">
            <p className="text-[32px] md:text-[48px] font-bold">Blogs</p>
            <p className="py-2 md:p-0 text-[12px] md:text-[14px] md:leading-6 max-w-[514px] text-[#bebebe]">
              We're prepared for the era of Generative AI and excited to
              collaborate. Let's evaluate your business and infrastructure to
              ensure you're ready for this significant technological
              advancement.
            </p>
          </div>

          <div className="navbar-main bg-white">
            <div className="main-container relative bottom-24 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 my-2">
              {posts.map((item, index) => (
                <div key={index}>
                  <Link href={`/blog/${item.slug}`} className="">
                    <div className="md:max-w-[324px] blogs_product_container">
                      <div
                        className="h-[202px] md:max-w-[324px] relative bg-no-repeat bg-cover rounded-lg"
                        style={{
                          backgroundImage: `url(${item.featuredImage ? item.featuredImage.node.link : '/image/service-bg/1.webp'})`,
                        }}
                      >
                        <div className="flex justify-between px-4 pt-4">
                          <div className="text-white text-base font-medium w-44">
                            {item.blogfield ? item.blogfield.blogcategory : 'no data'}
                          </div>
                          <div className="blogs_product_arrow">
                            <MdOutlineArrowOutward className="blogs_product_arrow_icon rounded-full w-6 h-6 text-xs p-1" />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 items-center text-xs mt-3 text-white">
                        <div className="bg-cloud px-2 rounded-full py-1">
                          {item.blogfield ? item.blogfield.blogcategory : 'no data'}
                        </div>
                        <div className="text-[10px] text-[#909090] tracking-wider">
                          {item.blogfield ? item.blogfield.readTime : 'no data'} Read
                        </div>
                      </div>

                      <div className="my-4">
                        <div className="blogs_product_title font-semibold text-[16px] text-[#000]">
                          {item ? item.title : 'no data'}
                        </div>
                        <div className="blogs_product_description mt-1 text-[14px] text-[#666666] leading-6">
                          {item.blogfield ? item.blogfield.description : 'no data'}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {pageInfo.hasNextPage && (
            <div className="flex justify-center relative bottom-10">
              <button onClick={handleLoadMore} className="bg-[#2145bd] px-6 py-2 rounded-[6px]">
                {loadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
          </div>

       

          <Newsletter contentType="Blog" />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Blog;
