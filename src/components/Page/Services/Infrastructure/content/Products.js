
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productInfrastructure } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productInfrastructure}/>
  );
};

export default Products;
