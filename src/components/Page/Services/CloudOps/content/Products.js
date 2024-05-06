
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productCloudops } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productCloudops}/>
  );
};

export default Products;
