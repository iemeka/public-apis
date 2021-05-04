import React, { useContext } from "react";
import { CategoryContext } from "./CategoryContex";

export default function Category() {
  const onChange = (e) => setCategory(e.target.value);
  const { categories, category, setCategory } = useContext(CategoryContext);

  return (
    <label htmlFor="categories">
      "categories"
      <select id="categories" onChange={onChange}>
        <option>select</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
