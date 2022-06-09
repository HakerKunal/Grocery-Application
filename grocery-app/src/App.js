import "./App.css";
import React from "react";
import MainPage from "./pages/mainpage/MainPage";
import Cart from "./pages/Cart/Cart";
import { connect } from "react-redux";
import SignUp from "./pages/SignIn/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import ProductDetails from "./components/Product/ProductDetail";
import Profile from "./pages/profile/Profile";
import Checkout from "./pages/checkout/Checkout";
import Order from "./pages/Order/Order";
function App({ current }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/orders" element={<Order />}></Route>
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
