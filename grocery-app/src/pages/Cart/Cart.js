import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setTotal } from "../../redux/Shopping/shopping-actions";

const Cart = ({ cart, setTotal, status }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  let navigate = useNavigate();
  let items = 0;
  let price = 0;

  useEffect(() => {
    cart.forEach((item) => {
      items += item.qty;
      price += item.price * item.qty;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [totalPrice, totalItems, setTotalItems, setTotalPrice, cart]);

  const handleCheckout = () => {
    if (status) {
      setTotal(totalPrice);
      navigate("/checkout");
    } else {
      alert("Please Login First...");
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.cart}>
        <div className={styles.cart__items}>
          {cart.length ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <h2>No Items in the Cart...</h2>
          )}
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Cart Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({totalItems} items)</span>
            <span>Rs {totalPrice}</span>
          </div>
          {cart.length ? (
            <Button
              className={styles.summary__checkoutBtn}
              size="small"
              variant="contained"
              color="primary"
              onClick={handleCheckout}
            >
              Proceed To Checkout
            </Button>
          ) : (
            <Button
              className={styles.summary__checkoutBtn}
              size="small"
              variant="contained"
              color="primary"
              onClick={handleCheckout}
              disabled
            >
              Proceed To Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    status: state.user.Login_status,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTotal: (total) => dispatch(setTotal(total)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
