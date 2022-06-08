import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../redux/Shopping/shopping-actions";
import "./product.css";
import { Link } from "react-router-dom";

const Product = ({ item, addToCart, loadCurrentItem }) => {
  return (
    <Card className="outer-box">
      <img className="image-product" src={item.imgLocation} alt="product" />

      <CardContent>
        <Typography gutterBottom component="div" className="item_name_box">
          <span className="item__name"> {item.name}</span>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="price__product"
        >
          Price- Rs {item.price}
        </Typography>
      </CardContent>

      <CardActions className="button__design">
        <Button
          variant="outlined"
          size="small"
          onClick={() => addToCart(item.id)}
        >
          Add to Cart
        </Button>
        <Link
          to={`/product/${item.id}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => loadCurrentItem(item)}
          >
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
const mapDipatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(null, mapDipatchToProps)(Product);
