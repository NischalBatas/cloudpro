import { gql } from '@apollo/client';

export const GET_CASE_STUDY=gql`
query caseStudies {
    caseStudies {
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
            backgroundImage{
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
          }
        }
      }
    }
  }`;