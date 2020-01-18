import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { cartpic } from "../cartpic.png";
import { render } from "@testing-library/react";

const mycart = ({
  products,
  cartproducts,
  itemsInCart,
  setCartProducts,
  cartFull,
  setCartFull
}) => {
  console.log(itemsInCart);
  return (
    //the objects.keys is coming up null? says it cannot
    <html>
      {Object.keys(itemsInCart).map(item => (
        <p className="title"> {products[item].title} </p>
      ))}
    </html>
  );
};

const CartDisplay = ({
  products,
  cartproducts,
  itemsInCart,
  setCartProducts,
  cartFull,
  setCartFull
}) => {
  if (cartFull) {
    console.log("cartfull");
    return (
      <div className="cart-display">
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography className="expansion-panel">Cart</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="cart-details">
            <Typography>
              {mycart(
                products,
                cartproducts,
                itemsInCart,
                setCartProducts,
                cartFull,
                setCartFull
              )}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
  return (
    console.log("cartnotfull"),
    (
      <div className="cart-display">
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography className="expansion-panel">Cart</Typography>
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </div>
    )
  );
};

export default CartDisplay;
export { mycart };
