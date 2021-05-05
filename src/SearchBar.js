import React, { useContext } from "react";
import {searchContext} from "./search/searchContext";

export default function SearchBar() {
  const {setSearchBarValue } = useContext(searchContext);
  const onChange = (e) => setSearchBarValue(e.target.value || "");
  return (
    <label htmlFor="title">
      title
      <input id="title" type="text" onChange={onChange} />
    </label>
  );
}
