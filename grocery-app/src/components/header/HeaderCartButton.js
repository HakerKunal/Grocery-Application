import React, { useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import classes from "./HeaderCartButton.module.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const HeaderCartButton = ({ cart, login_status }) => {
  let navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
      setCartCount(count);
    });
  }, [cart, cartCount]);

  const handleOnclick = () => {
    console.log(login_status);
    if (login_status === true) {
      navigate("/cart");
    } else {
      alert("Please Login First");
    }
  };

  return (
    // <Link to="/cart" style={{ color: "inherit", textDecoration: "inherit" }}>
    <button className={classes.button} onClick={handleOnclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
    // </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    login_status: state.user.Login_status,
  };
};

export default connect(mapStateToProps)(HeaderCartButton);
