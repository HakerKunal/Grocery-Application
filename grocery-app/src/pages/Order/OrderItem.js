import React from "react";
import classes from "./OrderItem.module.css";
const OrderItem = ({ item }) => {
  return (
    <div className={classes.order__orderitem}>
      <img
        src={item.product_id.imgLocation}
        className={classes.orderitem__image}
      />
      <span className={classes.orderitem__name}>{item.product_id.name}</span>
      <div className={classes.orderitem__details}>
        <div className={classes.orderitem__quantity__field}>
          <div>QTY-</div>
          <div className={classes.orderitem__quantity}>{item.quantity}</div>
        </div>
        <div className={classes.orderitem__quantity__field}>
          <div>Total Price</div>
          <div className={classes.orderitem__quantity}>Rs.{item.price}</div>
        </div>
      </div>
      <div className={classes.orderitem__modeofpayment}>
        Mode of payment - {item.mode_of_payment}
      </div>
      <div className={classes.orderitem__placedon}>
        placed on - {item.placed_on}
      </div>
    </div>
  );
};
export default OrderItem;
