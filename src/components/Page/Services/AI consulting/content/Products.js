
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productAIConsulting } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productAIConsulting}/>
  );
};

export default Products;
