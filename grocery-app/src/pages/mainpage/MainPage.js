import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/header/Header";
import ProductList from "../../components/Product/ProductList/ProductList";
import { loadAllProduct } from "../../redux/Shopping/shopping-actions";
import { fetchOrder } from "../../services/order_services";
import { fetchAllProduct } from "../../services/product_services";
const MainPage = ({ loadAllProduct }) => {
  useEffect(() => {
    fetchAllProduct()
      .then((res) => loadAllProduct(res.data.data))
      .catch((err) => console.log(err));
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
