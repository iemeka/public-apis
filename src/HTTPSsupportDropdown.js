import React, { useContext } from "react";
import { searchContext } from "./search/searchContext";
import "./HTTPSsupportDropdown.css";

export default function HTTPSsupportDropdown() {
  const { setHTTPSsupport } = useContext(searchContext);
  const onClick = (e) => {
    let content = e.target.textContent;
    if (content.length > 0) {
      console.log(content);
      if (content === "Both") content = null;
      setHTTPSsupport(content || null);
    }
  };

  return (
    <div className="http-switch">
      <span>HTTPS : </span>
      <div className="radioInputs" onClick={onClick}>
        <input id="on" type="radio" name="http-radio" />
        <label htmlFor="on">True</label>
        <input id="off" type="radio" name="http-radio" />
        <label htmlFor="off">False</label>
        <input id="both" type="radio" name="http-radio" />
        <label htmlFor="both">Both</label>
      </div>
    </div>

    // <label htmlFor="http">
    //   https
    //   <select id="http" onChange={onChange}>
    //     <option value="">All</option>
    //     {allHTTPS.map((item) => (
    //       <option key={item} value={item}>
    //         {item}
    //       </option>
    //     ))}
    //   </select>
    // </label>
  );
}
