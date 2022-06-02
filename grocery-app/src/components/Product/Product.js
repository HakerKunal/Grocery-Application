import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import "./product.css";

function Product(props) {
  let [product, setProduct] = useState({
    id: props.item.id,
    name: props.item.name,
    description: props.item.description,
    price: props.item.description,
  });
  let [quantity, setQuantity] = useState(0);

  function incrementCount() {
    setQuantity(quantity + 1);
  }
  function decrementCount() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <Card className="outer-box">
      <img className="image-product" src={props.item.imgLocation} />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price- Rs {props.item.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="outlined" size="small" className="add-to-cart-button">
          Add to Cart
        </Button>
        <div className="quantity">{quantity}</div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </CardActions>
    </Card>
  );
}
export default Product;
