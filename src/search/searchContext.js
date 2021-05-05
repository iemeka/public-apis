import React from "react";

export const searchContext = React.createContext({
  categories: [],
  category: null,
  setCategory: () => {},
  allHTTPS: [],
  HTTPSsupport: null,
  setHTTPSsupport: () => {},
  searchBarValue: null,
  setSearchBarValue: () => {},
});
