import React, { useState, useEffect } from "react";
import classes from "./Order.module.css";
import Header from "../../../components/header/Header";
import { setOrders } from "../../../redux/Shopping/shopping-actions";
import { connect } from "react-redux";
import { fetchOrder } from "../../../services/order_services";
import OrderItem from "../OrderItem/OrderItem";
import Pagination from "@mui/material/Pagination";

const Order = ({ setOrders, token, order }) => {
  const itemsPerPage = 8;
  const [noOfPages, setNoOfPages] = useState(0);
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    fetchOrder({ headers: { Authorization: token } })
      .then((res) => setOrders(res.data.data))
      .catch((err) => alert(err));
    setNoOfPages(Math.ceil(order.length / itemsPerPage));
  }, [order.length]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  let list_of_orders = order
    .sort((a, b) => b.placed_on.localeCompare(a.placed_on))
    .map((item) => <OrderItem item={item} />)
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <Header />
      <label className={classes.order__heading} data-testid="previous">
        Previous Orders...
      </label>
      <div className={classes.order__outerdiv}>
        {order.length ? (
          list_of_orders
        ) : (
          <div className={classes.order__noorder}>No Order Placed Till Now</div>
        )}
        <Pagination
          className="pagination"
          count={noOfPages}
          page={page}
          onChange={handlePageChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
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
