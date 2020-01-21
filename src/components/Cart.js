import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { cartpic } from "../cartpic.png";
import { render } from "@testing-library/react";

const CartDisplay = ({ products, itemsInCart, setCartProducts }) => {
  const finditem = itemsku => {
    console.log("itemsku:", itemsku);
    console.log("products:", products);
    var temp = products;
    console.log("temp", temp);
    for (var i = 0; i < Object.keys(products).length; i++) {
      if (itemsku == products[i].sku) return products[i];
    }
  };

  const mycart = () => {
    console.log("products:", products);
    console.log("productsinmycart", itemsInCart);
    var temp = itemsInCart;
    return (
      <div>
        {Object.keys(temp).map(item => (
          <p>
            {
              products.find(element => {
                return element["sku"] == String(item);
              })["title"]
            }
          </p>
        ))}
      </div>
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
            {mycart(products, itemsInCart, setCartProducts)}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CartDisplay;
