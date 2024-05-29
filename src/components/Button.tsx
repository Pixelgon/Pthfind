import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  active?: boolean;
}
const StyledButton = styled.a`
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

            &.active {
                color: green;
            }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, active }) => {
      return (
    <StyledButton onClick={onClick} className={ active ? "active" : ""}>
      {children}
    </StyledButton>
  );
};

export default Button;