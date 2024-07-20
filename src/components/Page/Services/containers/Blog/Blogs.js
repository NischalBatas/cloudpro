import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

import "../../../Blog/blog.css";
async function getPosts() {
  const query = `query GetAllBlogPost {
    blogs {
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
    }
  }`;
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next:{revalidate: 50}
  });

  const { data } = await res.json();

  return data.blogs.nodes;
}

const Blogs = async () => {
  const posts = await getPosts();
  const contents=posts.slice(0,3)
  console.log("Blog Components - Post details", posts);

  
  return (
    <div className="navbar-main bg-white py-10">
      {contents ? (
      

          <div className="main-container">
              <div className="text-black mb-6 w-full md:w-8/12 lg:w-4/12 text-left">
        <div className="font-semibold text-[28px]"> You may also like</div>
        {/* <div className="text-cloud3 mt-3 text-sm">
      You may also like
        </div> */}
      </div>
            <div className="main-container relative  grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-y-8 ">
              {contents.map((item, index) => {
                return (
                  <div key={index}>
                    <Link href={`/blog/${item.slug}`} className="">
                      <div className="md:max-w-[324px] blogs_product_container">
                        <div
                          className="h-[202px] md:max-w-[324px] relative  bg-no-repeat bg-cover rounded-lg"
                          style={{
                            backgroundImage: `url(${item.featuredImage ? item.featuredImage.node.link :'/image/service-bg/1.webp'})`,
                          }}
                        >
                          <div className="flex justify-between  px-4 pt-4  ">
                            <div className="text-white text-base  font-medium w-44">
                              {item.blogfield ? item.blogfield.blogcategory : 'no data'}
                            </div>
                            <div className="blogs_product_arrow">
                              <MdOutlineArrowOutward className="blogs_product_arrow_icon rounded-full  w-6 h-6 text-xs p-1" />
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
                );
              })}
            </div>
          </div>

      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Blogs;
