import React, { useEffect, useState } from "react";
import { searchItem } from "../../../redux/Shopping/shopping-actions";
import "./SearchBar.css";
import { connect } from "react-redux";

const SearchBar = ({ searchItem }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  useEffect(() => {
    searchItem(searchKeyword);
  }, [searchKeyword, setSearchKeyword]);
  const changeSearch = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onChange={changeSearch}
          value={searchKeyword}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={() => searchItem(searchKeyword)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

const mapDipatchToProps = (dispatch) => {
  return { searchItem: (item) => dispatch(searchItem(item)) };
};
export default connect(null, mapDipatchToProps)(SearchBar);
