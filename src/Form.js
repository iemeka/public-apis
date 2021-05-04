import React, { useState } from "react";
import Results from "./Results";
import useDropdown from "./useDropdown";

import CategoryDropdown from "./CategoryDropdown";
import { useQueryResults } from "./results/resultHooks";

/*
TODO: 
1. Move HTTPDropdown to own component
2. Implement search
*/
export default function Form() {
  const [searchResults, setSearchResults] = useState([]);
  const [https, HttpDropDown] = useDropdown("Https", "False", [
    "True",
    "False",
  ]);
  const queryResults = useQueryResults();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await queryResults(https);
    setSearchResults(result);
  };

  return (
    <div className="result-form">
      <form onSubmit={handleSubmit}>
        <CategoryDropdown />
        <HttpDropDown />
        <button>Submit</button>
      </form>
      <Results searchResults={searchResults} />
    </div>
  );
}
