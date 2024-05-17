import Blog from '@/components/Page/Blog/Blog'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
        <Link href='/blog/1'>Blog 1</Link>
        <Blog/>
    </div>
  )
}

export default page