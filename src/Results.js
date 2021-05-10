import React from "react";
import Result from "./Result";
import "./Results.css";
import PropTypes from "prop-types";

function Results({ searchResults }) {
  return (
    <div className="result-holder">
      {searchResults != null && searchResults.length > 0 ? (
        searchResults.map((entry, index) => (
          <Result
            key={`item-${index}`}
            title={entry.API}
            description={entry.Description}
            link={entry.Link}
            auth={entry.Auth}
            index={index}
            cors={entry.Cors}
          />
        ))
      ) : (
        <h1>NO RESULTS FOUND</h1>
      )}
    </div>
  );
}

Results.propTypes = {
  searchResults: PropTypes.array,
};

export default Results;
