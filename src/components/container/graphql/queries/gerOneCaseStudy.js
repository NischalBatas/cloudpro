import { gql } from '@apollo/client';

export const GET_ONE_CASE_STUDY = gql`
  query caseStudyBySlug($slug: String!) {
    casestudyBy(slug: $slug) {
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
          slug
         
    
    }
  }
`;
