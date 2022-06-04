import React, { useState } from "react";
import styles from "./CartItem.module.css";
import {
  removeFromCart,
  adjustQty,
} from "../../redux/Shopping/shopping-actions";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { IconButton } from "@mui/material";

import { connect } from "react-redux";

function CartItem({ item, removeFromCart, adjustQty }) {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
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
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <IconButton onClick={() => removeFromCart(item.id)}>
          <DeleteOutlineRoundedIcon className={styles.actions__deleteItemBtn} />
        </IconButton>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
