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

const cart = ({ itemsInCart, setCartProducts, products }) =>
  ReactDOM.render(
    <CartDisplay
      products={products}
      itemsInCart={itemsInCart}
      setCartProducts={setCartProducts}
    />,
    document.getElementById("cart-display")
  );

const ProductCard = ({ product, itemsInCart, setCartProducts, products }) => {
  const AddtoCart = () => {
    var currCart = itemsInCart;
    if (String(product.sku) in currCart) {
      currCart[String(product.sku)] += 1;
    } else {
      currCart[String(product.sku)] = 1;
    }
    setCartProducts(currCart);
    console.log(itemsInCart);
    cart({ itemsInCart, setCartProducts, products });
  };
  return (
    <Container className="product-container">
      <img
        className="img"
        src={"data/products/".concat(product.sku, "_1.jpg")}
      />
      <p className="title">{product.title}</p>
      <hr className="line"></hr>
      <p className="description">{product.description}</p>
      <p className="price">{product.currencyFormat.concat(product.price)} </p>

      <ButtonGroup className="size-buttons" variant="contained">
        <Button className="small-size-buttons" variant="contained">
          {" "}
          S{" "}
        </Button>
        <Button className="small-size-buttons" variant="contained">
          {" "}
          M{" "}
        </Button>
        <Button className="small-size-buttons" variant="contained">
          {" "}
          L{" "}
        </Button>
        <Button className="small-size-buttons" variant="contained">
          {" "}
          XL{" "}
        </Button>
      </ButtonGroup>
      <button className="add-to-cart" variant="contained" onClick={AddtoCart}>
        Add to Cart
      </button>
    </Container>
  );
};

export default ProductCard;
