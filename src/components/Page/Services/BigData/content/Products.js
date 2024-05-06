
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productBigData } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productBigData}/>
  );
};

export default Products;
