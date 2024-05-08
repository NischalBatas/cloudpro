import Link from 'next/link'
import React from 'react'

const Tabs = (props) => {
    console.log("Hello")
  return (
    <div className='navbar-main bg-white text-[#6A6A6A] py-5 border-b-[1px] font-normal'>
        <div className='main-container flex justify-start gap-[8rem] flex-wrap'>
        <Link href='#introduction_section'>Introduction</Link>
        <Link href='#solution_section'>Solution</Link>
        <Link href='#technology_section'>Technology</Link>
        <Link href='#impactandResults_section'>Impact and Results</Link>
        <Link href='#conclusion_section'>Conclusion</Link>
        </div>
    </div>
  )
}

export default Tabs