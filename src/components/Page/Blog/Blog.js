import { TEST_CASE_STUDY } from "@/components/api/testCaseStudy";
import React from "react";

// export async function getStaticProps() {
//     const allPosts = await TEST_CASE_STUDY();
//     console.log('Fetched All Posts:', allPosts);
//     return {
//         props: {
//             allPosts :allPosts,
//         },
//     };
// }

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

const Blog = async () => {
  const posts = await getPosts();
  console.log("Post details", posts);
  console.log("Blog Component All Posts:");
  return (
    <>
      <h1>Blog</h1>
      {posts.length > 0 ? (
        <>
          {posts ? "Data is present" : "no data"}

          {posts.map((item, index) => {
            return <p>{item.node.title}</p>;
          })}
        </>
      ) : (
        "No data"
      )}
    </>
  );
};

export default Blog;
