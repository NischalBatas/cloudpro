"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import './mobile.css'
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { IoIosArrowDown } from "react-icons/io";
import * as Collapsible from '@radix-ui/react-collapsible';
import { IoIosArrowUp } from "react-icons/io";

const MobileMenu = ({title,pathname}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Collapsible.Root className="height_content_main" open={open} onOpenChange={setOpen}>
    <div className='mobile_menu_link flex justify-between items-center'>
      <span className="">
       Services
      </span>
      <Collapsible.Trigger asChild>
        <button className="">{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
      </Collapsible.Trigger>
    </div>

    <Collapsible.Content className='overflow-y-scroll height_content'>
      <div className="">
        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>


        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>


        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>


        <div className='py-3 pb-1'>
          <p className='text-[#6083F3] uppercase text-[12px] tracking-wide'>Artificial Intelligence</p>
          <div className='py-2 flex flex-col'>
                <Link className="mobile_menu_features" href='#'>Generative AI & Applications</Link>
                <Link className="mobile_menu_features" href='#'>AI Consulting</Link>
          </div>
        </div>

      
        
      </div>
     
    </Collapsible.Content>
  </Collapsible.Root>




  )
}

export default MobileMenu