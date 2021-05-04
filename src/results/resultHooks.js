import { useCallback, useContext } from "react";
import { searchContext } from "../search/searchContext";

const BASE_URL = 'https://api.publicapis.org/entries';

export function useQueryResults() {
  const endpoint = useEndPoint();
  return useCallback(
    async (https) => {
      const results = await fetch(endpoint());
      const { entries } = await results.json();
      return entries;
    },
    [endpoint]
  );
}

function useEndPoint() {
  const { category, HTTPSsupport } = useContext(searchContext);
  return useCallback(() => {
    if (category != null && HTTPSsupport != null) {
      return `${BASE_URL}?category=${category}&https={HTTPSsupport}`;
    } else if (category != null) {
      return `${BASE_URL}?category=${category}`;
    } else if (HTTPSsupport != null) {
      return `${BASE_URL}?https=${HTTPSsupport}`;
    } else {
      return BASE_URL;
    }
  }, [category, HTTPSsupport]);
}
