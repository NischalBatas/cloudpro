"use client";
import Footer from "@/components/Footer/Footer";
import Homes from "@/components/Page/Homes/Homes";
import React, { useEffect, useState } from "react";
import Loading from "./loading";


const Home = () => {
  // const [loading,setLoading]=useState(true)

  // useEffect(() => {
  //   // Set a timer to change the loading state after 3 seconds (3000 milliseconds)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);

  //   // Clean up the timer when the component unmounts or when loading state changes
  //   return () => clearTimeout(timer);
  // }, []); 

  return (
  // <>
  // {loading ?   (<Loading/>) :
    <div className="px-1 md:px-2">
           
    <Homes/>
    <Footer/>
  </div>
// }
//   </>
  );
};

export default Home;
