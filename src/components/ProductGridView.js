import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

const ProductGridView = ({ products, itemsInCart, setCartProducts }) => {
  return (
    <div className="product-grid">
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item>
            <ProductCard
              key={product.sku}
              product={product}
              itemsInCart={itemsInCart}
              setCartProducts={setCartProducts}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductGridView;
