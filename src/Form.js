import React, { useState } from "react";
import Results from "./Results";
import HTTPSsupportBtn from "./HTTPSsupportBtn";
import SearchBar from "./SearchBar";
import TableHead from "./TableHead";
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
    <div>
      <div className="header">
        <form onSubmit={handleSubmit}>
          <SearchBar />
          <CategoryDropdown />
          <HTTPSsupportBtn />
          <button id="submit-btn">Submit</button>
        </form>
      </div>
      <TableHead />
      <div className="result" style={{ color: "red" }}>
        
        <div className="in-result">
          <div className="in-result-content">
            <Results searchResults={searchResults} />
          </div>
        </div>
      </div>
    </div>
  );
}
