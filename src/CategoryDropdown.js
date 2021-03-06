import React, { useContext, useState } from "react";
import { searchContext } from "./search/searchContext";
import "./CategoryDropdown.css";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";

export default function CategoryDropdown() {
  const {
    categories: { categories },
    category,
    setCategory,
  } = useContext(searchContext);
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="category-dropdown">
      <label className="category-label" htmlFor="category">
        <span>Category :</span>
        <span>
          {category == null || category.length < 1 ? "All" : category}
        </span>
        <button
          id="category"
          data-testid="drop-down-btn"
          onClick={() => setVisibility(!visibility)}
        >
          <Icon
            path={visibility ? mdiChevronUp : mdiChevronDown}
            size={1}
            color="#000"
          />
        </button>
      </label>
      {visibility ? (
        <div className="category-list">
          {[null, ...(categories || [])].map((item) => (
            <div
              className="category-list-item"
              key={item ?? "all"}
              onClick={() => {
                setCategory(item);
                setVisibility(false);
              }}
            >
              {item ?? "All"}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
