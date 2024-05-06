
import React from "react";

import ProductMain from "../../containers/Products/ProductMain";
import { productAdhoc } from "@/db/services/products";

const Products = () => {
  return (
    <ProductMain content={productAdhoc}/>
  );
};

export default Products;
