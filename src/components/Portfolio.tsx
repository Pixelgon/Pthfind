import styled from "styled-components";
import { useContext } from "react";
import { PortfolioContext } from "../providers/PortfolioProvider";

export const Portfolio = () => {
    
    const portfolioData = useContext(PortfolioContext);

    const StyledPortfolio = styled.main`
        background-color: ${portfolioData[0].background};
        color: ${portfolioData[0].primaryColor};
        height: calc(100vh - 40px);
        width: calc(100vw - 40px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
    `;

    return (
        <>
            <StyledPortfolio>
                <h1>Portfolio</h1>
            </StyledPortfolio>
        </>
    );
};