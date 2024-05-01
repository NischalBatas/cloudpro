import React from "react";
import "./Dropdown/dropdown.css";
import Dropdown from "./Dropdown/Dropdown";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Menu from "./Menu";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router=useRouter()
  const onHandleSubmit=(path)=>{
    router.push(path)
  }
  const pathname=usePathname()

  return (
    <div className="navbar-main-group fixed w-full">
      <NavigationMenu.Root className="NavigationMenuRoot navbar-main">
        
        <div className="NavigationMenuList w-full">
          <div className="logo-main">
            <Link href="/">
              <Image className="whitelogo"
                width={120}
                height={120}
                alt="company_logo"
                src="../../../Image/logo/logo.svg"
              />
              <Image className="blacklogo"
                width={120}
                height={120}
                alt="company_logo"
                src="../../../Image/logo/logoblack.svg"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4 py-1">
          <Link className={`NavigationMenuTrigger rounded-[8px] ${pathname==='/' ? 'active-menu' :''}`} href="/">
              Home
            </Link>

            <Menu pathname={pathname} title="Services" />
            {/* <Menu title="Product" /> */}
            
            <Link className={`NavigationMenuTrigger rounded-[8px] ${pathname==='/casestudy' ? 'active-menu' :''}`} href="">
              Case Study
            </Link>
            <Link className={`NavigationMenuTrigger rounded-[8px] ${pathname==='/aboutus' ? 'active-menu' :''}`} href="/aboutus">
              About Us
            </Link>
            <button onClick={()=>{onHandleSubmit('/contactus')}} className="bg-cloudBtn text-white px-2 py-1 rounded text-[14px]">
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
