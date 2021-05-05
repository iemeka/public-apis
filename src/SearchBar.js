import React, { useContext } from "react";
import {searchContext} from "./search/searchContext";

export default function SearchBar() {
  const onChange = (e) => setSearchBarValue(e.target.value || null);
  const {setSearchBarValue } = useContext(searchContext);
  return (
    <label htmlFor="title">
      title
      <input id="title" type="text" onChange={onChange} />
    </label>
  );
}
