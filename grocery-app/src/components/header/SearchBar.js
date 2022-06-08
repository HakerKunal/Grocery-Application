import React, { useEffect, useState } from "react";
import { searchItem } from "../../redux/Shopping/shopping-actions";
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
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
          onChange={changeSearch}
          value={searchKeyword}
        />
        <button
          type="submit"
          class="searchButton"
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
