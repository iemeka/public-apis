import React, { useEffect, useState } from "react";
import Results from "./Results";
import useDropdown from "./useDropdown";

export default function Form () {
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategory] = useState([]);
  const [category, CategoryDropDown] = useDropdown(
    "Category",
    "Finance",
    categories
  );
  const [https, HttpDropDown] = useDropdown("Https", "False", [
    "True",
    "False",
  ]);

  useEffect(() => {
    setCategory([]);
    const endPoint = "https://api.publicapis.org/categories";
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

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
};
