import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Menu from "./Menu";
import { usePathname, useRouter } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const router = useRouter();
  const onHandleSubmit = (path) => {
    router.push(path);
  };
  const pathname = usePathname();

  return (
    <div className="navbar-main-group navbar-main-group3 fixed w-full">
      <NavigationMenu.Root className="NavigationMenuRoot navbar-main relative">
        <div className="NavigationMenuList w-full">
          <div className="logo-main">
            <NavigationMenu.Link href="/">
              <Image
                className="whitelogo"
                width={120}
                height={120}
                alt="company_logo"
                src="/Image/logo/logo-white.svg"
              />
              {/* <Image
                className="blacklogo"
                width={120}
                height={120}
                alt="company_logo"
                src="/Image/logo/logoblack.svg"
              /> */}
            </NavigationMenu.Link>
          </div>

          <div className="flex items-center gap-4 py-1">
            <Menu pathname={pathname} title="Services" />
            {/* <Menu title="Product" /> */}

            <NavigationMenu.Link
              className={`NavigationMenuTrigger rounded-[8px] ${
                pathname === "/casestudy" ? "active-menu" : ""
              }`}
              href="/casestudy"
            >
              Case Study
            </NavigationMenu.Link>
            <NavigationMenu.Link
              className={`NavigationMenuTrigger rounded-[8px] ${
                pathname === "/aboutus" ? "active-menu" : ""
              }`}
              href="/aboutus"
            >
              About Us
            </NavigationMenu.Link>
            <button
              onClick={() => {
                onHandleSubmit("/contactus");
              }}
              className="bg-cloudBtn main_button px-5 py-2 text-cloudText rounded-[8px] text-[14px] font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

export default Navbar;
