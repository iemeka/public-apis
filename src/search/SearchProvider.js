import React, { useEffect, useState } from "react";
import { searchContext } from "./searchContext";
import PropTypes from "prop-types";

function SearchProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [HTTPSsupport, setHTTPSsupport] = useState(null);
  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() => {
    const endPoint = "https://api.publicapis.org/categories";
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const value = {
    categories,
    category,
    setCategory,
    HTTPSsupport,
    setHTTPSsupport,
    searchBarValue,
    setSearchBarValue,
  };

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.element,
};

export default SearchProvider;
