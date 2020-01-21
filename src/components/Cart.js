import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { cartpic } from "../cartpic.png";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const cart2 = ({ itemsInCart, setCartProducts, products }) =>
  ReactDOM.render(
    <CartDisplay
      products={products}
      itemsInCart={itemsInCart}
      setCartProducts={setCartProducts}
    />,
    document.getElementById("cart-display")
  );

const CartDisplay = ({ products, itemsInCart, setCartProducts }) => {
  const RemoveFromCart = itemsku => {
    var currCart = itemsInCart;

    if (itemsInCart[String(itemsku)] == 1) {
      console.log("trying to delete");
      delete currCart[String(itemsku)];
    } else {
      currCart[String(itemsku)] -= 1;
    }
    setCartProducts(currCart);
    console.log(itemsInCart);
    cart2({ itemsInCart, setCartProducts, products });
  };

  const mycart = () => {
    console.log("products:", products);
    console.log("itemsInCart", itemsInCart);
    var temp = itemsInCart;
    return (
      <div>
        {Object.keys(temp).map(item => (
          <div>
            <p>
              Item:
              {
                products.find(element => {
                  return element["sku"] == String(item);
                })["title"]
              }
              &nbsp; Quantity: {temp[item]}
              <button onClick={() => RemoveFromCart(item)}>
                Remove from Cart
              </button>
            </p>
          </div>
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
            <p>Total Price: </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CartDisplay;
