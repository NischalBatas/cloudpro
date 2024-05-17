import { TEST_CASE_STUDY } from '@/components/container/graphql/queries/testCaseStudy';
import React from 'react';

export async function getStaticProps() {
    const allPosts = await TEST_CASE_STUDY();
    console.log('Fetched All Posts:', allPosts);
    return {
        props: {
            allPosts :allPosts,
        },
    };
}

const Blog = ({ allPosts }) => {
    console.log('Blog Component All Posts:', allPosts);
    return (
        <>
            <h1>Blog</h1>
            {allPosts ? "Data is present" :"no data"}
            {/* <ul>
                {allPosts.map((item, index) => (
                    <li key={index}>{item.node.casestudyfieldgroud.introduction}</li>
                ))}
            </ul> */}
        </>
    );
};

export default Blog;
