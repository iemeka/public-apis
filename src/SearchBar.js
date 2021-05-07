import React, { useContext } from "react";
import { searchContext } from "./search/searchContext";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import  './SearchBar.css'

export default function SearchBar() {
  const { setSearchBarValue } = useContext(searchContext);
  const onChange = (e) => setSearchBarValue(e.target.value || "");
  return (
    <label htmlFor="search-bar">
      <Icon size={1} path={mdiMagnify} color="grey" />
      <input id="search-bar" type="text" onChange={onChange} />
    </label>
  );
}
