import React from "react";
import Result from "./Result";

export default function Results({ searchResults }) {
  return (
    <div className="result-holder">
      {searchResults ? (
        searchResults.map((entry, index) => (
          <Result
            key={`item-${index}`}
            title={entry.API}
            description={entry.Description}
            link={entry.Link}
            category={entry.Category}
            index={index}
          />
        ))
      ) : (
        <h1>NO RESULTS FOUND</h1>
      )}
    </div>
  );
}
