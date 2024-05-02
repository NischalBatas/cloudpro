import React, { useState } from "react";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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
    
            <div className=" absolute top-8 left-0 w-full flex flex-col bg-black navbar-main py-2">
                    <Link className="mobile_menu_link" href='#'>Case Study</Link>
                    <Link className="mobile_menu_link" href='/aboutus'>About Us</Link>
                    <MobileMenu setHamburger={setHamburger} setNavbarStatus={setNavbarStatus} pathname={pathname} title="Services" />
            </div>
   
      
      :''}

     
      </div>
    </div>
  );
};

export default MobileNavigation;
