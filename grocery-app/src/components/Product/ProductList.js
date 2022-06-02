import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./productList.css";

function ProductList() {
  const [products, setProducts] = useState({ data: [], loaded: false });
  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts({ ...products, data: data, loaded: true });
      });
  }, [products.loaded]);

  let listOfProduct = products.data.map((item, id) => (
    <Product key={id} item={item} />
  ));
  return (
    <div>
      <div className="product-container">{listOfProduct}</div>
    </div>
  );
}

export default ProductList;
