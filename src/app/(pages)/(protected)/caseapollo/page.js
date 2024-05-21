// "use client"
// import { GET_CASE_STUDY } from '@/components/container/graphql/queries/getCaseStudy';
// import { useQuery } from '@apollo/client';
import React from 'react';

const Page = () => {
    // const {loading,error,data}=useQuery(GET_CASE_STUDY)
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    // if (!data || !data.caseStudies || !data.caseStudies.edges) {
    //     return <p>No data available.</p>;
    // }
    // console.log(data)


  return (
    <div className="pt-40">
    {/* {data.caseStudies.edges.map((item, index) => (
       <div key={index}>
        <li>{item.node.casestudyfieldgroud.caseStudySector}</li>
        <li>{item.node.casestudyfieldgroud.caseStudySectorDescription}</li>

     
       </div>
    ))} */}
</div>
  );
};

export default Page;

