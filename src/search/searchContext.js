import React from "react";

export const searchContext = React.createContext({
  categories: [],
  category: null,
  setCategory: () => {},
  HTTPSsupport: null,
  setHTTPSsupport: () => {},
  searchBarValue: "",
  setSearchBarValue: () => {},
});
