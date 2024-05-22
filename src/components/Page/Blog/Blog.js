import Link from "next/link";
import React from "react";

const Blog = async () => {
 
  return (
    <>
      <h1>
        <Link href='/blog/1'><div>Blog (Click Me)</div></Link>
      </h1>
    
    </>
  );
};

export default Blog;
