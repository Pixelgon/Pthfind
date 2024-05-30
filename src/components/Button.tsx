import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  active?: boolean; 
  color: string;
}

interface StyledButtonProps {
  active?: boolean;
  color: string;
}

const StyledButton = styled.a<StyledButtonProps>`
  height: 72px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active, color }) => active ? color : 'var(--elementBg)'};
  color: ${({ active, color }) => active ? 'var(--icoActive)' : color};
  border-radius: 18px;
  cursor: pointer;
  transition: all var(--trans);

  svg {
    transition: scale var(--trans);
    padding: 18px;
  }
  &:hover {
    filter: ${({ active }) => active ? '' : 'brightness(.6)'};
    svg {
      scale: 1.1;
    }
  }

  
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, active=false, color }) => {
  return (
    <StyledButton onClick={onClick} active={active} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;