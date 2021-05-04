import React, { useEffect, useState } from "react";
import { CategoryContext } from "./CategoryContex";

export default function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const endPoint = "https://api.publicapis.org/categories";
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const value = { categories, category, setCategory };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
