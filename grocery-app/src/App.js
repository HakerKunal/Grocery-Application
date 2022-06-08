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
function App({ current }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
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
