
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productBiReport } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productBiReport}/>
  );
};

export default Products;
