import React, { useEffect, useState, useContext } from "react";
import Results from "./Results";
import useDropdown from "./useDropdown";
import { CategoryContext } from "./category/CategoryContex";

export default function Form() {
  const { categories } = useContext(CategoryContext);

  const [searchResults, setSearchResults] = useState([]);
  const [category, CategoryDropDown] = useDropdown(
    "Category",
    "Finance",
    categories
  );
  const [https, HttpDropDown] = useDropdown("Https", "False", [
    "True",
    "False",
  ]);

  async function requestResults() {
    const cate = category.split(" ")[0];
    const endPoint = `https://api.publicapis.org/entries?category=${cate}&https=${https}`;
    const results = await fetch(endPoint);
    const { entries } = await results.json();
    setSearchResults(entries || []);
  }

  return (
    <div className="result-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestResults();
        }}
      >
        <CategoryDropDown />
        <HttpDropDown />
        <button>Submit</button>
      </form>
      <Results searchResults={searchResults} />
    </div>
  );
}
