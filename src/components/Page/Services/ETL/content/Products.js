
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productETL } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productETL}/>
  );
};

export default Products;
