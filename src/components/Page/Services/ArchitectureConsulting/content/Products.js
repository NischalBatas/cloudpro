
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productArchitecture } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productArchitecture}/>
  );
};

export default Products;
