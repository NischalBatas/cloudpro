import Footer from "@/components/Footer/Footer";
import Introduction from "@/components/Page/Homes/Content/ServiceDetail/Introduction";
import Products from "@/components/Page/Homes/Content/ServiceDetail/Products";
import ServiceType from "@/components/Page/Homes/Content/ServiceDetail/ServiceType";
import Solution from "@/components/Page/Homes/Content/ServiceDetail/Solution";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
        <Introduction/>
        <Solution/>
        <ServiceType/>
        <Products/>
        <Footer/>
    </div>
  );
};

export default page;
