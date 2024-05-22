"use client"
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import "./mobile.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const MobileNavigation = () => {
  const pathname = usePathname();
  const [hamburger,setHamburger]=useState(false)
  const [navbarStatus,setNavbarStatus]=useState(true)
  const router = useRouter();
  const onHandleSubmit = (path) => {
    router.push(path);
  };

  return (
    <div className="hidden navbar-main-group navbar-main-group4 fixed w-full py-2">
      <div className="NavigationMenuRoot4 navbar-main relative">
        <div className="NavigationMenuList4 w-full">
          <div className="">
            <Link href="/">
              <Image
                className="whitelogo"
                width={120}
                height={120}
                alt="company_logo"
                src="/Image/logo/logo-white.svg"
              />
            </Link>
          </div>

          
       {hamburger ?    <IoClose className="text-[20px] cursor-pointer" onClick={()=>{setHamburger(false)}}/> :    <FaBarsStaggered className="text-[20px] cursor-pointer" onClick={()=>{setHamburger(true), setNavbarStatus(true)}}/>}
  
    
        </div>
        {navbarStatus &&  hamburger  ? 
    
            <div className=" absolute top-8 left-0 w-full flex flex-col bg-black navbar-main py-2 h-screen">
                    <Link className="mobile_menu_link" onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/case-studies'>Case Studies</Link>
                    <Link className="mobile_menu_link"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/about'>About Us</Link>                 
                    <Link className="mobile_menu_link"  onClick={()=>{setNavbarStatus(false),setHamburger(false)}} href='/blog'>Blogs</Link>                 

                    <MobileMenu setHamburger={setHamburger} setNavbarStatus={setNavbarStatus} pathname={pathname} title="Services" />
                    <button
              onClick={() => {
                onHandleSubmit("/contact?action=message"),setNavbarStatus(false),setHamburger(false)
              }}
              className="bg-cloudBtn text-center navbar_contactus_btn text-white my-2 px-2 py-2 rounded text-[14px]"
            >
              Contact Us
            </button>
                   
            </div>
   
      
      :''}

     
      </div>
    </div>
  );
};

export default MobileNavigation;
