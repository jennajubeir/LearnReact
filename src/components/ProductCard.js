import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const ProductCard = ({ product }) => {
  return (
    <Container className="product-container">
      <img
        className="img"
        src={"data/products/".concat(product.sku, "_1.jpg")}
      />
      <p className="title">{product.title}</p>
      <hr className="line"></hr>

      <p className="title">{product.title}</p>
      <p className="title">{product.title}</p>
    </Container>
  );
};

export default ProductCard;
