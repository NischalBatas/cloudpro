"use client"
import React, { useEffect, useState } from 'react'
import { getPosts } from '../Blog'

const Pagination = ({apiFetchData}) => {
    const [currentPage,setCurrentPage]=useState()

    
  return (
    <div className='pb-6 w-full flex justify-center'>
        <button className='bg-[#2356e0] px-6 py-2 rounded-md'>Load More</button>
    </div>
  )
}

export default Pagination