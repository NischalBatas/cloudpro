import Link from 'next/link'
import React from 'react'

const Tabs = (props) => {
    console.log("Hello")
  return (
    <div className='navbar-main tabs_main_service bg-white text-[#6A6A6A]  border-b-[1px]'>
        <div className='main-container flex justify-start gap-[8rem] flex-wrap'>
        <Link className='py-5' href='#introduction_section'>Introduction</Link>
        <Link className='py-5' href='#solution_section'>Solution</Link>
        <Link className='py-5' href='#technology_section'>Technology</Link>
        <Link className='py-5' href='#impactandResults_section'>Impact and Results</Link>
        <Link className='py-5' href='#conclusion_section'>Conclusion</Link>
        </div>
    </div>
  )
}

export default Tabs