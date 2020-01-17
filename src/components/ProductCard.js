import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ProductCard = ({ product }) => {
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
      <button className="add-to-cart" variant="contained">
        Add to Cart
      </button>
    </Container>
  );
};

export default ProductCard;
