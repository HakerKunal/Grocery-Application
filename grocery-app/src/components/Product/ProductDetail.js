import React from "react";
import styles from "./SingleItem.module.css";
import Header from "../header/Header";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const ProductDetail = ({ current, addToCart }) => {
  return (
    <div>
      <Header />
      <div className={styles.singleItem}>
        <img
          className={styles.singleItem__image}
          src={current.imgLocation}
          alt={current.title}
        />
        <div className={styles.singleItem__details}>
          <p className={styles.details__title}>{current.name}</p>
          <p className={styles.details__description}>{current.description}</p>
          <p className={styles.details__price}>Rs. {current.price}</p>

          <button
            onClick={() => addToCart(current.id)}
            className={styles.details__addBtn}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
