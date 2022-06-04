import "./App.css";
import React from "react";
import MainPage from "./pages/mainpage/MainPage";
import Cart from "./pages/Cart/Cart";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetail";
function App({ current }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {!current ? (
          <Route exact path="/" element={<MainPage />}></Route>
        ) : (
          <Route exact path="/product/:id" element={<ProductDetails />} />
        )}
      </Routes>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
