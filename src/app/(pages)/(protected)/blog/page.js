import Blog from '@/components/Page/Blog/Blog'
import React from 'react'



const page = async() => {
  return (
    <div className=''>

            <Blog/>
    </div>
  )
}

export default page


export function generateMetadata({ params }) {
  return {
    title:"Blogs",
  }
}