import { Dispatch, FC, PropsWithChildren, createContext, useReducer } from "react";
import { Portfolio, PortfolioAction } from "../types/portfolio";
import { PortfolioReducer } from "../reducers/PortfolioReducer";

const PortfolioInit: Portfolio = {
    id: "1",
    background: "#1E1E1E",
    primaryColor: "#00CCFF",
    locked: true,
    elements: [],
};

export const PortfolioContext = createContext<{ data: Portfolio, dispatch: Dispatch<PortfolioAction> }>({ data: PortfolioInit, dispatch: () => {} });

export const PortfolioProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, dispatch] = useReducer(PortfolioReducer, PortfolioInit);
  
    return <PortfolioContext.Provider value={{ data, dispatch }}>{children}</PortfolioContext.Provider>;
};