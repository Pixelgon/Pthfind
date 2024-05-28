import { Dispatch, FC, PropsWithChildren, createContext, useReducer } from "react";
import { Portfolio, PortfolioAction } from "../types/portfolio";
import { PortfolioReducer } from "../reducers/PortfolioReducer";

const PortfolioInit: Portfolio = {
    id: "1",
    background: "#fff",
    primaryColor: "#000",
    locked: true,
    elements: [],
};

export const PortfolioContext = createContext<[Portfolio, Dispatch<PortfolioAction>]>([PortfolioInit, () => {}]);

export const PortfolioProvider: FC<PropsWithChildren> = ({ children }) => {
    const reducer = useReducer(PortfolioReducer, PortfolioInit);
  
    return <PortfolioContext.Provider value={reducer}>{children}</PortfolioContext.Provider>;
};