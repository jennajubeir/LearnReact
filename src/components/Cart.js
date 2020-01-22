import React, { useEffect, useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { cartpic } from "../cartpic.png";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

const cart2 = ({
  itemsInCart,
  setCartProducts,
  products,
  cartPrice,
  setCartPrice,
  inventory,
  setInventory
}) => {
  ReactDOM.render(
    <CartDisplay
      products={products}
      itemsInCart={itemsInCart}
      setCartProducts={setCartProducts}
      cartPrice={cartPrice}
      setCartPrice={setCartPrice}
      inventory={inventory}
      setInventory={setInventory}
    />,
    document.getElementById("cart-display")
  );
};

const CartDisplay = ({
  products,
  itemsInCart,
  setCartProducts,
  cartPrice,
  setCartPrice,
  inventory,
  setInventory
}) => {
  const RemoveFromCart = itemsku => {
    var currCart = itemsInCart;
    var newprice = cartPrice;
    // get price of the item
    var holder = products.find(element => {
      return element["sku"] == String(itemsku);
    })["price"];

    newprice = newprice - holder;
    if (itemsInCart[String(itemsku)] == 1) {
      delete currCart[String(itemsku)];
    } else {
      currCart[String(itemsku)] -= 1;
    }
    setCartProducts(currCart);
    setCartPrice(newprice);
    cart2({ itemsInCart, setCartProducts, products, cartPrice, setCartPrice });
  };

  const mycart = () => {
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
              <button
                className="remove-from-cart-button"
                onClick={() => RemoveFromCart(item)}
              >
                Remove from Cart
              </button>
            </p>
          </div>
        ))}
        <p>Total Price: ${cartPrice}</p>
      </div>
    );
  };

  return (
    <div className="cart-display-2">
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography className="expansion-panel">Cart</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="cart-details">
          <Typography>
            {mycart(
              products,
              itemsInCart,
              setCartProducts,
              cartPrice,
              setCartPrice,
              inventory,
              setInventory
            )}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CartDisplay;
