import { useCallback, useContext } from "react";
import { searchContext } from "../search/searchContext";

const BASE_URL = "https://api.publicapis.org/entries";

export function useQueryResults() {
  const endpoint = useEndPoint();
  return useCallback(async () => {
    const results = await fetch(endpoint());
    const { entries } = await results.json();
    return entries;
  }, [endpoint]);
}

function useEndPoint() {
  const { category, HTTPSsupport, searchBarValue } = useContext(searchContext);
  const url = searchBarValue.length > 0 ? `${BASE_URL}?title=${searchBarValue}&` : BASE_URL+'?';
  return useCallback(() => {
    if (category != null && HTTPSsupport != null) {
      return `${url}category=${category}&https=${HTTPSsupport}`;
    } else if (category != null) {
      return `${url}category=${category}`;
    } else if (HTTPSsupport != null) {
      return `${url}https=${HTTPSsupport}`;
    } else {
      return url;
    }
  }, [category, HTTPSsupport,url]);
}