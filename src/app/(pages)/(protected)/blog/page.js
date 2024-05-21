import Blog from '@/components/Page/Blog/Blog'
import Link from 'next/link'
import React from 'react'

async function getPosts(){
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
          }`

    const res =await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }), 
    }
    )

    const { data } = await res.json();

    return data.caseStudies.edges;
}

const page = async() => {
  const posts = await getPosts();
  console.log("Post details",posts)
  return (
    <div className='pt-20'>
              <h1>Blog1</h1>
            {/* {posts ? "Data is present" :"no data"}

            {posts.map((item,index)=>{
              return(
                <p>{item.node.title}</p>
              )
            })} */}
            <Blog/>
    </div>
  )
}

export default page