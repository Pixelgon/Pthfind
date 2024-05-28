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

export const PortfolioContext = createContext<[Portfolio, Dispatch<PortfolioAction>]>([PortfolioInit, () => {}]);

export const PortfolioProvider: FC<PropsWithChildren> = ({ children }) => {
    const reducer = useReducer(PortfolioReducer, PortfolioInit);
  
    return <PortfolioContext.Provider value={reducer}>{children}</PortfolioContext.Provider>;
};