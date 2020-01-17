import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

const ProductGridView = ({ products }) => {
  return (
    <div className="product-grid">
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item>
            <ProductCard key={product.sku} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductGridView;
