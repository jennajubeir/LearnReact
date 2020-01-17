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
import { mycart } from "./Cart";

const ProductCard = ({ product, itemsInCart, setCartProducts }) => {
  const AddtoCart = item => {
    var currCart = itemsInCart;
    if (String(item.sku) in currCart) {
      currCart[item.sku] += 1;
    } else {
      currCart[item.sku] = 1;
    }
    setCartProducts(currCart);

    const cart = ReactDOM.render(
      mycart,
      document.getElementById("cart-display")
    );
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
      <button
        className="add-to-cart"
        variant="contained"
        onClick={() => AddtoCart(product)}
      >
        Add to Cart
      </button>
    </Container>
  );
};

export default ProductCard;
