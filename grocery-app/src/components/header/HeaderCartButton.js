import React, { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import classes from "./HeaderCartButton.module.css";
import { connect } from "react-redux";
const HeaderCartButton = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
      setCartCount(count);
    });
  }, [cart, cartCount]);

  return (
    <Link to="/cart" style={{ color: "inherit", textDecoration: "inherit" }}>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartCount}</span>
      </button>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(HeaderCartButton);
