import React, { useState } from "react";
import Header from "../../components/header/Header";
import classes from "./Chekout.module.css";
import { placeOrder } from "../../services/order_services";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/Shopping/shopping-actions";

const Checkout = ({ total, cart, token, resetCart }) => {
  const [addesss, setAddress] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("Cash On Delivery");
  let alertStatus = false;
  let navigate = useNavigate();
  const handlePlaceOrder = (token) => {
    if (addesss === "") {
      alert("address should not be empty");
    } else {
      cart.forEach((element) => {
        placeOrder(
          { headers: { Authorization: token } },
          {
            product_id: element.id,
            price: element.qty * element.price,
            quantity: element.qty,
            address: addesss,
            mode_of_payment: modeOfPayment,
          }
        )
          .then((res) => {
            resetCart();
            if (!alertStatus) {
              alert("Order Successfull...Thanks For Shopping ");
              alertStatus = true;
            }
            navigate("/");
          })
          .catch((err) => alert(err));
      });
    }
  };

  return (
    <div>
      <Header />
      <span className={classes.checkout__heading}>Checkout</span>
      <div className={classes.checkout__outer__div}>
        <div className={classes.checkout__question}>
          <span className={classes.checkout__attribute}>Total Price</span>
          <span className={classes.checkout__attribute}>Mode Of Payment</span>
          <span className={classes.checkout__attribute}>Billing Address</span>
          <span className={classes.checkout__attribute}>Phone Number</span>
        </div>
        <div className={classes.checkout__answer}>
          <span
            className={classes.checkout__attribute}
            data-testid="test-price"
          >
            Rs {total}
          </span>
          <div
            className={classes.mode__of__payment}
            onChange={(event) => {
              setModeOfPayment(event.target.value);
            }}
          >
            <span className={classes.span__font}>Debit Card</span>
            <input
              type="radio"
              name="mode_of_payment"
              value="Debit Card"
              className={classes.radio__button}
            ></input>
            <span className={classes.span__font}>Cash On Delivery</span>
            <input
              type="radio"
              name="mode_of_payment"
              value="Cash On Delivery"
              className={classes.radio__button}
            />
            <span className={classes.span__font}>Net Banking</span>
            <input
              type="radio"
              name="mode_of_payment"
              value="Net Banking"
              className={classes.radio__button}
            />
          </div>
          <input
            type="text"
            className={classes.checkout__address}
            value={addesss}
            placeholder="Enter the Address"
            onChange={(event) => setAddress(event.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Enter the Phone Number"
            className={classes.checkout__phone__number}
          ></input>
        </div>
      </div>
      <button
        className={classes.sign__button}
        onClick={() => handlePlaceOrder(token)}
      >
        Place Your Order
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.shop.total,
    cart: state.shop.cart,
    token: state.user.token,
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    resetCart: () => dispatch(resetCart()),
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(Checkout);
