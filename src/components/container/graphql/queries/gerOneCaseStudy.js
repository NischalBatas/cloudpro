import { gql } from '@apollo/client';

export const GET_ONE_CASE_STUDY=gql`
query caseStudies($userId: ID!) {
  caseStudies(id:$userId) {
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
      }
    }
  }
}` ;