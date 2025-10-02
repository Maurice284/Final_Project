import { createContext, useState } from "react";

export const PageContext = createContext();

export function PageProvider({ children }) {
  const [page, setpage] = useState("home");

  return (
    <PageContext.Provider value={{ page, setpage }}>
      {children}
    </PageContext.Provider>
  );
}
