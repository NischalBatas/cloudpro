
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productDataAnalytics } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productDataAnalytics}/>
  );
};

export default Products;
