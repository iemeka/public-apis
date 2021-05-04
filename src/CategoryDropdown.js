import React, { useContext } from "react";
import { searchContext } from "./search/searchContext";

export default function CategoryDropdown() {
  const onChange = (e) => setCategory(e.target.value || null);
  const { categories, setCategory } = useContext(searchContext);

  return (
    <label htmlFor="categories">
      categories
      <select id="categories" onChange={onChange}>
        <option value="">All</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
