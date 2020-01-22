import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import CartDisplay from "./Cart";

const sizes = ["S", "M", "L", "XL"];

const cart = ({
  itemsInCart,
  setCartProducts,
  products,
  cartPrice,
  setCartPrice,
  inventory,
  setInventory
}) =>
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

const ProductCard = ({
  product,
  itemsInCart,
  setCartProducts,
  products,
  cartPrice,
  setCartPrice,
  inventory,
  setInventory
}) => {
  const AddtoCart = size => {
    var currCart = itemsInCart;
    var currInventory = inventory;
    var newprice = cartPrice;
    console.log("pre:", product.price);
    newprice = newprice + product.price;
    if (String(product.sku) in currCart) {
      currCart[String(product.sku)] += 1;
    } else {
      currCart[String(product.sku)] = 1;
    }
    currInventory[String(product.sku)][size] -= 1;
    setCartPrice(newprice);
    setCartProducts(currCart);
    setInventory(currInventory);
    console.log("post:", cartPrice);
    console.log(itemsInCart);
    cart({ itemsInCart, setCartProducts, products, cartPrice, setCartPrice });

    if (inventory[String(product.sku)][size] < 1) {
      [].slice
        .call(
          document
            .getElementById(String(product.sku))
            .getElementsByClassName("small-size-buttons")
        )
        .find(element => {
          return element.value == size;
        }).disabled = true;
    }
  };
  const DisabledButton = ({ size }) => {
    try {
      return inventory[String(product.sku)][size] === 0;
    } catch (e) {
      return false;
    }
  };
  return (
    <Container className="product-container" id={String(product.sku)}>
      <img
        className="img"
        src={"data/products/".concat(product.sku, "_1.jpg")}
      />
      <p className="title">{product.title}</p>
      <hr className="line"></hr>
      <p className="description">{product.description}</p>
      <p className="price">{product.currencyFormat.concat(product.price)} </p>

      <ButtonGroup className="size-buttons" variant="contained">
        {sizes.map(size => (
          <Button
            className="small-size-buttons"
            key={String(product.sku).concat("_", size)}
            onClick={e => AddtoCart(e.target.value)}
            disabled={DisabledButton({ size })}
            value={size}
          >
            {size}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default ProductCard;
