import React from "react";
import Product from "./Product";
import "./productList.css";
import { connect } from "react-redux";

const ProductList = ({ products, searchKeyword }) => {
  let listOfProduct = products
    .filter((item) => {
      if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
        return item;
      }
    })
    .map((item, id) => <Product key={id} item={item} />);
  return (
    <div className="product-outerbox">
      {listOfProduct.length ? (
        <div className="product-container">{listOfProduct}</div>
      ) : (
        <label className="noproduct">No Product Found........</label>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    searchKeyword: state.shop.searchKeyword,
  };
};

export default connect(mapStateToProps)(ProductList);
