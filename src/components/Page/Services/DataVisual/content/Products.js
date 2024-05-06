
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productDataVisual } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productDataVisual}/>
  );
};

export default Products;
