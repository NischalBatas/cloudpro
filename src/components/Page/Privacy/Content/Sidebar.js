"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Sidebar = () => {
    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 0, // Adjust this value to account for the fixed navigation height
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
    <div className='hidden md:block relative'>
        <div className='fixed policy_main_tab flex flex-col gap-2 text-wrap w-[250px]'>
        <Link className='py-2 text-[16px] font-semibold' href='#california'>California privacy policy for CloudPro AI</Link>
        <Link className='py-2 text-[16px] font-semibold' href='#information2'>What information do we collect?</Link>
        <Link className='py-2 text-[16px] font-semibold' href='#useinformation'>How do we use your information?</Link>
        <Link className='py-2 text-[16px] font-semibold' href='#sharedinformation'>Will your information be shared with anyone?</Link>
        <Link className='py-2 text-[16px] font-semibold' href='#whoinformation'>Who will your information be shared with? </Link>
        </div>
    </div>
  )
}

export default Sidebar