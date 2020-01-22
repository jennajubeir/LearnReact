import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

const ProductGridView = ({
  products,
  itemsInCart,
  setCartProducts,
  cartPrice,
  setCartPrice,
  inventory,
  setInventory
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
              cartPrice={cartPrice}
              setCartPrice={setCartPrice}
              inventory={inventory}
              setInventory={setInventory}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProductGridView;
