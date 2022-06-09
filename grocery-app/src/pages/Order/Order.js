import React, { useEffect } from "react";
import classes from "./Order.module.css";
import Header from "../../components/header/Header";
import { setOrders } from "../../redux/Shopping/shopping-actions";
import { connect } from "react-redux";
import { fetchOrder } from "../../services/order_services";
import OrderItem from "./OrderItem";

const Order = ({ setOrders, token, order }) => {
  useEffect(() => {
    fetchOrder({ headers: { Authorization: token } })
      .then((res) => setOrders(res.data.data))
      .catch((err) => alert(err));
  }, []);

  let list_of_orders = order.map((item) => <OrderItem item={item} />);
  return (
    <div>
      <Header />
      <label className={classes.order__heading}> Previous Orders...</label>
      <div className={classes.order__outerdiv}>
        {order.length ? (
          list_of_orders
        ) : (
          <div className={classes.order__noorder}>No Order Placed Till Now</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    order: state.shop.order,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setOrders: (order) => dispatch(setOrders(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
