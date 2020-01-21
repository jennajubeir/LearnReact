import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { cartpic } from "../cartpic.png";
import { render } from "@testing-library/react";

const finditem = ({ products, itemsku }) => {
  console.log(itemsku);
  for (var i = 0; i < products.length; i++) {
    if (itemsku == products[i].sku) return products[i];
  }
};

const CartDisplay = ({
  products,
  cartproducts,
  itemsInCart,
  setCartProducts,
  cartFull,
  setCartFull
}) => {
  const mycart = () => {
    console.log("p1", itemsInCart);
    return (
      <html>
        {Object.keys(itemsInCart).map(item => (
          <p className="title"> {item} </p>
        ))}
      </html>
    );
  };

  return (
    <div className="cart-display">
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography className="expansion-panel">Cart</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="cart-details">
          <Typography>
            {mycart({
              products,
              cartproducts,
              itemsInCart,
              setCartProducts,
              cartFull,
              setCartFull
            })}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CartDisplay;
