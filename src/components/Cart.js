import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { cartpic } from "../cartpic.png";
import { render } from "@testing-library/react";

const mycart = ({ products, cartproducts, itemsInCart, setCartProduct }) => {
  return (
    <ExpansionPanelDetails className="cart-details">
      {Object.keys(itemsInCart).map(item => (
        <p className="title">{products[item].title}</p>
      ))}
    </ExpansionPanelDetails>
  );
};

const CartDisplay = ({
  products,
  cartproducts,
  itemsInCart,
  setCartProduct
}) => {
  return (
    <div className="cart-display">
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography className="expansion-panel">Cart</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="cart-details">
          {Object.keys(itemsInCart).map(item => (
            <p className="title">{products[item].title}</p>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CartDisplay;
export { mycart };
