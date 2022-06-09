import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
export const loadAllProduct = (item) => {
  return {
    type: actionTypes.LOAD_ALL_PRODUCT,
    payload: item,
  };
};
export const searchItem = (item) => {
  return {
    type: actionTypes.SEARCH_ITEM,
    payload: item,
  };
};
export const setTotal = (total) => {
  return {
    type: actionTypes.SET_TOTAL,
    payload: total,
  };
};

export const setOrders = (order) => {
  return {
    type: actionTypes.SET_ORDER,
    payload: order,
  };
};
export const resetCart =()=>{
  return{
    type:actionTypes.RESET_CART,
    
  }
}
