import React, { useEffect, useState } from "react";
import { searchContext } from "./searchContext";

export default function SearchProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [HTTPSsupport, setHTTPSsupport] = useState(null);

  useEffect(() => {
    const endPoint = "https://api.publicapis.org/categories";
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const value = { categories, category, setCategory, HTTPSsupport, setHTTPSsupport };

  return (
    <searchContext.Provider value={value}>
      {children}
    </searchContext.Provider>
  );
}
