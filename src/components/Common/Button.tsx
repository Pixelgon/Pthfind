import styled from 'styled-components';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  active?: boolean; 
  color: string;
  nobg?: boolean;
}

interface StyledButtonProps {
  $active?: boolean;
  $color: string;
  $nobg?: boolean;
}

export const StyledButton = styled.a<StyledButtonProps>`
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $nobg, $active, $color }) => $nobg ? 'transparent' : ($active ? $color : 'var(--elementBg)')};
  color: ${({ $active, $color }) => $active ? 'var(--icoActive)' : $color};
  border-radius: 18px;
  cursor: pointer;
  transition: all var(--trans);
  margin-bottom: auto;
  backdrop-filter: ${({ $nobg }) => $nobg ? 'none' : 'blur(10px)'};

  svg {
    transition: scale var(--trans);
    height: 36px;
    aspect-ratio: 1;
  }

  &:hover {
    background-color: ${({ $active, $color, $nobg }) => $active ? $color : $nobg ? '' : 'var(--elementBg)'};
    svg {
      scale: 1.1;
    }
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, active = false, color, nobg = false }) => (
  <StyledButton onClick={onClick} $active={active} $color={color} $nobg={nobg}>
    {children}
  </StyledButton>
);

export default Button;