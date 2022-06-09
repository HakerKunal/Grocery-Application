import axios from "axios";
export const fetchAllProduct = () => {
  let response = axios.get("http://127.0.0.1:8000/products/product");
  return response;
};
