import React, { useContext } from "react";
import { searchContext } from "./search/searchContext";
import "./HTTPSsupportBtn.css";

export default function HTTPSsupportBtn() {
  const { setHTTPSsupport } = useContext(searchContext);
  const onClick = (e) => {
    let content = e.target.textContent;
    if (content.length > 0) {
      if (content === "HTTPS") {
        content = "True"
      } else if (content === "HTTP") {
        content = "False"
      } else {
        content = null
      }
      setHTTPSsupport(content || null);
    }
  };

  return (
    <div className="http-switch">
      <div className="radioInputs" onClick={onClick}>
        <input id="on" type="radio" name="http-radio" />
        <label htmlFor="on">HTTPS</label>
        <input id="off" type="radio" name="http-radio" />
        <label htmlFor="off">HTTP</label>
        <input id="both" type="radio" name="http-radio" />
        <label htmlFor="both">Both</label>
      </div>
    </div>
  );
}
