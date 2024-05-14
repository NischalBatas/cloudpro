"use client"
import ParticleBackground from '@/components/particles/particleBackground';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    fetch('https://blogscloudproai-7a4c2b.ingress-erytho.ewp.live/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
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
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCaseData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Optionally, set an error state here for user feedback
      });
  }, []);

  return (
    <div className="pt-20">
      {caseData ? (
        <div>
          {caseData.data.caseStudies.edges.map((item, index) => (
            <div key={index}>
              <li>{item.node.casestudyfieldgroud.conclusion}</li>
              <li>{item.node.casestudyfieldgroud.herotext}</li>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}


    
  
      
    </div>
  );
};

export default Page;
