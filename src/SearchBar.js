import React, { useContext } from "react";
import { searchContext } from "./search/searchContext";
import "./SearchBar.css";

export default function SearchBar() {
  const { setSearchBarValue } = useContext(searchContext);
  const onChange = (e) => setSearchBarValue(e.target.value || "");
  return (
    <label htmlFor="search-bar">
      <input id="search-bar" type="text" onChange={onChange} />
    </label>
  );
}
