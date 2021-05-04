import React, {useContext} from "react";
import { CategoryContext } from "./CategoryContex";

export default function Category() {
  const { categories, category,setCategory } = useContext(CategoryContext);
  return (
    <label htmlFor="categories">
      "categories"
      <select
        id="categories"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
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
