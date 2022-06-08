import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import ProductList from "../../components/Product/ProductList";
import { loadAllProduct } from "../../redux/Shopping/shopping-actions";
const MainPage = ({ loadAllProduct }) => {
  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((res) => res.json())
      .then((res) => {
        loadAllProduct(res);
      });
  }, []);
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};
const mapDipatchToProps = (dispatch) => {
  return {
    loadAllProduct: (item) => dispatch(loadAllProduct(item)),
  };
};
export default connect(null, mapDipatchToProps)(MainPage);
