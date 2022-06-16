import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./productList.css";
import { connect } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { filterItem } from "../../../redux/Shopping/shopping-actions";

const ProductList = ({
  products,
  searchKeyword,
  filterKeyword,
  filterItem,
}) => {
  const itemsPerPage = 8;
  const [noOfPages, setNoOfPages] = useState(0);
  const [page, setPage] = React.useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setNoOfPages(Math.ceil(products.length / itemsPerPage));
  });

  let listOfProduct = products
    .filter((item) => {
      if (item.category.toLowerCase().includes(filterKeyword.toLowerCase())) {
        return item;
      }
    })

    .filter((item) => {
      if (item.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
        return item;
      }
    })
    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
    .map((item, id) => <Product key={id} item={item} />);

  return (
    <div className="product-outerbox">
      {listOfProduct.length ? (
        <div className="product-container">{listOfProduct}</div>
      ) : (
        <label className="noproduct">No Product Found........</label>
      )}
      <div className="category__box">
        <span>Category</span>
        <span
          className="category__options"
          onClick={() => {
            filterItem("vegetable");
          }}
        >
          Vegetable
        </span>
        <span
          className="category__options"
          onClick={() => {
            filterItem("household");
          }}
        >
          Household
        </span>
        <span
          className="category__options"
          onClick={() => {
            filterItem("food");
          }}
        >
          Food
        </span>
        <span
          className="category__options"
          onClick={() => {
            filterItem("beauty");
          }}
        >
          Beauty
        </span>
        <span
          className="category__options"
          onClick={() => {
            filterItem("electronics");
          }}
        >
          Electronics
        </span>
        <span
          className="category__options"
          onClick={() => {
            filterItem("bevrage");
          }}
        >
          Bevrage
        </span>
        <span
          className="category__options"
          onClick={() => {
            filterItem("fruit");
          }}
        >
          Fruit
        </span>
        <span
          className="clear__button"
          onClick={() => {
            filterItem("");
          }}
        >
          Clear
        </span>
      </div>
      <Pagination
        className="pagination"
        count={noOfPages}
        page={page}
        onChange={handlePageChange}
        defaultPage={1}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    searchKeyword: state.shop.searchKeyword,
    filterKeyword: state.shop.filterKeyword,
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    filterItem: (item) => dispatch(filterItem(item)),
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(ProductList);
