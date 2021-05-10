import { useCallback, useContext } from "react";
import { searchContext } from "../search/searchContext";

const BASE_URL = "https://api.publicapis.org/entries";

export function useQueryResults() {
  const { category, HTTPSsupport, searchBarValue } = useContext(searchContext);
  return useCallback(async () => {
    const endpoint = generateEndpoint(category, HTTPSsupport, searchBarValue);
    const results = await fetch(endpoint);
    const { entries } = await results.json();
    return entries;
  }, [category, HTTPSsupport, searchBarValue]);
}

export function generateEndpoint(category, HTTPSsupport, searchBarValue) {
  const url =
    searchBarValue != null && searchBarValue.length > 0
      ? `${BASE_URL}?title=${searchBarValue}&`
      : BASE_URL + "?";
  if (category != null && HTTPSsupport != null) {
    return `${url}category=${category}&https=${HTTPSsupport}`;
  } else if (category != null) {
    return `${url}category=${category}`;
  } else if (HTTPSsupport != null) {
    return `${url}https=${HTTPSsupport}`;
  } else {
    return url;
  }
}
