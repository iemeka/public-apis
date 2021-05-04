import React from "react";

export default function Result({ title, description, link, category }) {
  return (
    <div className="entry">
      <h3>{title}</h3>
      <p>
        Category : {category} <br /> {description} <br />{" "}
        <a href={link}>{link}</a>{" "}
      </p>
    </div>
  );
}
