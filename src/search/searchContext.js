import React from "react";

export const searchContext = React.createContext({
  categories: [],
  category: null,
  setCategory: () => {},
  HTTPSsupport: null, // null | true | false
  setHTTPSsupport: () => {},
});
