"use client"
import "@radix-ui/themes/styles.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import MobileNavigation from "@/components/Navbar/MobileMenu/MobileNavigation";
import ProgressBar from "@/components/Animation/ProgressBar";
import { Suspense } from "react";




const ProtectedLayout = ({ children }) => {
  return (

 <Suspense>


<ProgressBar/>
   {/* <Header /> */}
   <Navbar />
   <MobileNavigation/>
  
     {children}

     <ScrollToTop top='40' component={<FaArrowUp />} className='scroll_top' smooth width='15' height="15"/>
    
  
 </Suspense>

  );
};

export default ProtectedLayout;
