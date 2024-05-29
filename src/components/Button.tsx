import React, { useContext } from 'react';
import styled from 'styled-components';
import { PortfolioContext } from '../providers/PortfolioProvider';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  active?: boolean;
}
const StyledButton = styled.button`
            max-height: 36px;
            padding: 18px;
            height: 100%;
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--elementBg);
            border-radius: 18px;
            cursor: pointer;
            transition: background-color var(--trans);

            &:hover {
                background-color: var(--elementBg--sec);
            }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
      return (
    <StyledButton onClick={onClick}  >
      {children}
    </StyledButton>
  );
};

export default Button;