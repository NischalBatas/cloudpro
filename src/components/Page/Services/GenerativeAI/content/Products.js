
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productGenerativeAI } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productGenerativeAI}/>
  );
};

export default Products;
