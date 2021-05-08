import React from "react";
import "./Result.css";
import PropTypes from "prop-types";

function Result({ title, description, link, auth, cors }) {
  return (
    <div className="table-body">
      <span className="title">{title }</span>
      <span className="description">
        {description}
      </span>
      <span className="auth">{ auth.length > 0 ? auth : "-"}</span>
      <span className="cors">{cors}</span>
      <a  href ={link} className="action">visit</a>
    </div>
  );
}

Result.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  category: PropTypes.string,
  cors: PropTypes.string,
};

export default Result;
