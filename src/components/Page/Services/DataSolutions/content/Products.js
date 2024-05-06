
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productDataSolutions } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productDataSolutions}/>
  );
};

export default Products;
