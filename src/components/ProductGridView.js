import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

const ProductGridView = ({
  products,
  itemsInCart,
  setCartProducts,
  cartFull,
  setCartFull
}) => {
  return (
    <div className="product-grid">
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item>
            <ProductCard
              key={product.sku}
              product={product}
              products={products}
              itemsInCart={itemsInCart}
              setCartProducts={setCartProducts}
              cartFull={cartFull}
              setCartFull={setCartFull}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductGridView;
