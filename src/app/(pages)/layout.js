"use client";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "../globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Page/Homes/Content/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import MobileNavigation from "@/components/Navbar/MobileMenu/MobileNavigation";

const ProtectedLayout = ({ children }) => {
  return (
    // <Theme
    //   appearance="dark"
    //   accentColor=""
    //   grayColor="sand"
    //   radius="large"
    //   scaling="95%"
    // >
   <>
      <Header />
      <Navbar />
      <MobileNavigation/>
     
        {children}
        <Footer />
        <ScrollToTop top='40' component={<FaArrowUp />} className='scroll_top' smooth width='15' height="15"/>
        
   </>
    // </Theme>
  );
};

export default ProtectedLayout;
