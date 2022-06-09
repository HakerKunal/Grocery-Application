import axios from "axios";
export const placeOrder = (header, obj) => {
  let response = axios.post("http://127.0.0.1:8000/orders/order", obj, header);
  return response;
};

export const fetchOrder = (header) => {
  let response = axios.get("http://127.0.0.1:8000/orders/order", header);
  return response;
};
