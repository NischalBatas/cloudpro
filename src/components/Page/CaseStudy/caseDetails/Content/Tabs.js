"use client"
import React, { useEffect } from 'react';
import Link from 'next/link'

const Tabs = (props) => {
    console.log("Hello",props)
    useEffect(() => {
      const handleScroll = (event) => {
          event.preventDefault();
          const targetId = event.currentTarget.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 60, // Adjust this value to account for the fixed navigation height
                  behavior: 'smooth'
              });
          }
      };

      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach(link => {
          link.addEventListener('click', handleScroll);
      });

      return () => {
          links.forEach(link => {
              link.removeEventListener('click', handleScroll);
          });
      };
  }, []);
  return (
    <div className='navbar-main tabs_main_service bg-white text-[#6A6A6A] text-[14px] md:text-[16px]  border-b-[1px]'>
        <div className='main-container flex justify-between gap-6 text-nowrap overflow-x-auto'>
        <Link className='py-5' href='#introduction_section'>Introduction</Link>
        <Link className='py-5' href='#solution_section'>Technology</Link>
        <Link className='py-5' href='#technology_section'>Solutions</Link>
        <Link className='py-5' href='#impactandResults_section'>Impact and Results</Link>
        <Link className='py-5' href='#conclusion_section'>Conclusion</Link>
        </div>
    </div>
  )
}

export default Tabs