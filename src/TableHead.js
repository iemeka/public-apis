import React from "react";
import "./TableHead.css";

export default function TableHead() {
  return (
    <div className="table-header-container">
      <div className="table-header">
        <span id="title"></span>
        <span id="description">Description</span>
        <span id="auth">Authentication</span>
        <span id="cors">CORS</span>
      </div>
    </div>
  );
}
