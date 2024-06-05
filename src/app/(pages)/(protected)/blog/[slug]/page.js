import BlogDetails from '@/components/Page/Blog/BlogDetails/BlogDetails'
import React from 'react'

const page = (props) => {
  
  return (
    <div>
        <BlogDetails props={props}/>
    </div>
  )
}

export default page


export function generateMetadata({ params }) {
  return {
    title:params.slug,
  }
}