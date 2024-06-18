"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import "./mobile.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const MobileNavigation = () => {
  const pathname = usePathname();
  const [hamburger, setHamburger] = useState(false);
  const [navbarStatus, setNavbarStatus] = useState(true);
  const router = useRouter();
  const navbarRef = useRef(null);

  const onHandleSubmit = (path) => {
    router.push(path);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setHamburger(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden navbar-main-group navbar-main-group4 relative z-[998] w-full py-2" ref={navbarRef}>
      <div className="mobile_navigation2"></div>
      <div className="NavigationMenuRoot4 navbar-main relative">
        <div className="NavigationMenuList4 h-[42px] w-full">
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

          {hamburger ? (
            <IoClose className="text-[20px] cursor-pointer" onClick={() => { setHamburger(false); }} />
          ) : (
            <FaBarsStaggered className="text-[20px] cursor-pointer" onClick={() => { setHamburger(true); setNavbarStatus(true); }} />
          )}
        </div>
        {navbarStatus && hamburger ? (
          <div className="overflow-hidden fixed top-12 left-0 w-full flex flex-col bg-black px-[1.2rem] py-2">
            <Link className="mobile_menu_link" onClick={() => { setNavbarStatus(false); setHamburger(false); }} href='/case-studies'>Case Studies</Link>
            <Link className="mobile_menu_link" onClick={() => { setNavbarStatus(false); setHamburger(false); }} href='/about'>About Us</Link>
            <Link className="mobile_menu_link" onClick={() => { setNavbarStatus(false); setHamburger(false); }} href='/blog'>Blogs</Link>
            <MobileMenu setHamburger={setHamburger} setNavbarStatus={setNavbarStatus} pathname={pathname} title="Services" />
            <button
              onClick={() => {
                onHandleSubmit("/contact?action=message");
                setNavbarStatus(false);
                setHamburger(false);
              }}
              className="bg-cloudBtn text-center navbar_contactus_btn text-white my-4 px-2 py-2 rounded text-[14px]"
            >
              Contact Us
            </button>
          </div>
        ) : ''}
      </div>
    </div>
  );
};

export default MobileNavigation;
