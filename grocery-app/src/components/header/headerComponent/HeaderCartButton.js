import React, { useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const HeaderCartButton = ({ cart, login_status }) => {
  const [cartCount, setCartCount] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
      setCartCount(count);
    });
  }, [cart, cartCount]);

  const handleOnclick = () => {
    navigate("/cart");
  };

  return (
    <button className={classes.button} onClick={handleOnclick}>
      <span className={classes.icon}>
        <ShoppingCartIcon data-testid="shopping-carticon"/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(HeaderCartButton);
