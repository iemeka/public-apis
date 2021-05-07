import React from "react";
import "./Result.css";

export default function Result({ title, description, link, category }) {
  return (
    <div className="entry">
      <h3>{title}</h3>
      <span>
        Category : {category} <br /> {description} <br />{" "}
        <a href={link}>{link}</a>{" "}
      </span>
    </div>
  );
}
