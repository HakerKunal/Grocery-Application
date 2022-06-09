import React, { useState } from "react";
import styles from "./CartItem.module.css";
import {
  removeFromCart,
  adjustQty,
} from "../../redux/Shopping/shopping-actions";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { IconButton } from "@mui/material";
import { connect } from "react-redux";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandlerMinus = (e) => {
    if (input > 1) {
      setInput(input - 1);
      adjustQty(item.id, input - 1);
    }
  };
  const onChangeHandlerPlus = (e) => {
    setInput(input + 1);
    adjustQty(item.id, input + 1);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.imgLocation}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.name}</p>

        <p className={styles.details__price}>Rs {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" id="qty" name="qty" value={input} readOnly />
          <button className={styles.qty__button} onClick={onChangeHandlerPlus}>
            +
          </button>
          <button className={styles.qty__button} onClick={onChangeHandlerMinus}>
            -
          </button>
        </div>
        <IconButton onClick={() => removeFromCart(item.id)}>
          <DeleteOutlineRoundedIcon className={styles.actions__deleteItemBtn} />
        </IconButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
