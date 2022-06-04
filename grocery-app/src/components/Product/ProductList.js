import React, { useState, useEffect } from "react";
import Product from "./Product";
import "./productList.css";
import { connect } from "react-redux";

function ProductList({ products }) {
  let listOfProduct = products.map((item, id) => (
    <Product key={id} item={item} />
  ));
  return (
    <div className="product-outerbox">
      <div className="product-container">{listOfProduct}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(ProductList);
