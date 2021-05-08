import React from "react";
import "./Result.css";
import PropTypes from "prop-types";

function Result({ title, description, link, category }) {
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

Result.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  category:PropTypes.string,
};

export default Result;