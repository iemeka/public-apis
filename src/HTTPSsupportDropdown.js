import React, { useContext } from "react";
import { searchContext } from "./search/searchContext";

export default function HTTPSsupportDropdown() {
  const { setHTTPSsupport } = useContext(searchContext);
  const onChange = (e) => setHTTPSsupport(e.target.value || null);
  const allHTTPS = ["true", "false"];

  return (
    <label htmlFor="http">
      https
      <select id="http" onChange={onChange}>
        <option value="">All</option>
        {allHTTPS.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
