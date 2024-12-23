import { createContext, ReactNode, useContext } from "react";
import { PortfolioState, state } from "./data";

const PortfolioContext = createContext<PortfolioState | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => (
  <PortfolioContext.Provider value={state}>
    {children}
  </PortfolioContext.Provider>
);

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      "usePortfolioContext must be used within a PortfolioProvider"
    );
  }
  return context;
};
