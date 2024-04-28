import React from "react";
import "./Dropdown/dropdown.css";
import Dropdown from "./Dropdown/Dropdown";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Menu from "./Menu";

const Navbar = () => {
  //   const handleMenu = () => {
  //     const elements = document.getElementsByClassName('navbar-menu-list');
  //     for (let i = 0; i < elements.length; i++) {
  //         if (elements[i].style.display === "none" || elements[i].style.display === "") {
  //             elements[i].style.display = "flex";
  //         } else {
  //             elements[i].style.display = "none";
  //         }
  //     }
  // }
  return (
    <div className="navbar-main px-8 py-2 backdrop-blur-xl">
      <NavigationMenu.Root className="NavigationMenuRoot  ">
        
        <div className="NavigationMenuList w-full container m-auto">
          <div>
            <Link href="/">
              <Image
                width={120}
                height={120}
                alt="company_logo"
                src="../../../Image/logo/company.svg"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Menu title="Services" />
            <Menu title="Product" />
            <Link className="NavigationMenuTrigger rounded-[8px]" href="">
              Case Study
            </Link>
            <Link className="NavigationMenuTrigger rounded-[8px]" href="">
              About Us
            </Link>
            <button className="bg-cloudBtn text-white px-2 py-1 rounded">
              ContactUs
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
