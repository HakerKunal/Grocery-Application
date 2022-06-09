import React from "react";
import { Link } from "react-router-dom";
import classes from "./OrderButton.module.css";

const OrderButton = () => {
  return (
    <button className={classes.button__profile}>
      <Link to="/orders" className={classes.link__color}>
        <span>Orders</span>
      </Link>
    </button>
  );
};

export default OrderButton;
