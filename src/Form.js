import React, { useState } from "react";
import Results from "./Results";
import HTTPSsupportDropdown from "./HTTPSsupportDropdown";
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";
import { useQueryResults } from "./results/resultHooks";
import "./Form.css";

export default function Form() {
  const [searchResults, setSearchResults] = useState([]);

  const queryResults = useQueryResults();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await queryResults();
    setSearchResults(result);
  };

  return (
    <div className="form-and-result">
      <form onSubmit={handleSubmit}>
        <SearchBar />
        <CategoryDropdown />
        <HTTPSsupportDropdown />

        <button>Submit</button>
      </form>
      <Results searchResults={searchResults} />
    </div>
  );
}
