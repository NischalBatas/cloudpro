import About from "@/components/Page/About/About";
import React from "react";

const page = () => {
  return (
    <div>
      <About />
   
     
    </div>
  );
};

export default page;

export function generateMetadata({ params }) {
  return {
    title:"About Us",
  }
}