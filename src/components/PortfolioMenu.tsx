import Button from "./Button";
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/solid'
import { useContext } from "react";
import { PortfolioContext } from "../providers/PortfolioProvider";
import { PortfolioActionType } from "../types/portfolio";



export const PortfolioMenu = () => {
    const portfolio = useContext(PortfolioContext);


    const toggleLock = () => {
        portfolio.dispatch({ type: PortfolioActionType.TOGGLE_LOCK });
        console.log(portfolio.data.locked);
    };

    return (
        <>
            <Button onClick={() => toggleLock()} active={portfolio.data.locked}>
                  {portfolio.data.locked ? <LockClosedIcon /> : <LockOpenIcon />}
            </Button>
        </>
    );
};