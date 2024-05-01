import Image from "next/image";
import React from "react";
import GenerativeProduct from "./GenerativeProduct";

const Products = () => {
  return (
    <div className="navbar-main bg-white pt-10 py-28">
       <div className="main-container">
      <p className="font-bold text-[36px] max-w-[477px] text-black mb-8">
        What you get with Generative AI Solutions
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
       <GenerativeProduct/>
      </div>
      </div>
    </div>
  );
};

export default Products;
