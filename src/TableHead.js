import React from "react";
import "./TableHead.css";

export default function TableHead() {
  return (
    <div className="table-header-container">
      <div className="table-header">
        <span id="title">Title</span>
        <span id="description">Description</span>
        <span id="auth">Auth</span>
        <span id="cors">Cors</span>
        <span id="action">Action</span>
      </div>
    </div>
  );
}
