import React, { useEffect, useState, useContext } from "react";
import Results from "./Results";
import useDropdown from "./useDropdown";
import { CategoryContext } from "./category/CategoryContex";
import Category from "./category/Category";

export default function Form() {
  const {category } = useContext(CategoryContext);

  const [searchResults, setSearchResults] = useState([]);

  const [https, HttpDropDown] = useDropdown("Https", "False", [
    "True",
    "False",
  ]);

  async function requestResults() {
    const endPoint = `https://api.publicapis.org/entries?category=${category}&https=${https}`;
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
        <Category />
        <HttpDropDown />
        <button>Submit</button>
      </form>
      <Results searchResults={searchResults} />
    </div>
  );
}
