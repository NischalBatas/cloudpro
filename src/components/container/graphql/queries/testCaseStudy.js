import graphqlRequest from "../../api/graphqlRequest";

export async function TEST_CASE_STUDY() {
  const query = {
    query: `query caseStudies {
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
        }`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.caseStudies.edges;
  console.log(allPosts)
  return allPosts;
}
