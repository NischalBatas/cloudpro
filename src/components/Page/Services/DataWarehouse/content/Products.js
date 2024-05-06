
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productDataWarehouse } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productDataWarehouse}/>
  );
};

export default Products;
