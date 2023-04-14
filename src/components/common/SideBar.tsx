import { FC } from 'react';
import styled from 'styled-components';

interface SideBarProps {
  onThemeToggle: () => void;
}
const SideBar: FC<SideBarProps> = ({ onThemeToggle }) => {
  return (
    <StyledSideBar>
      <div onClick={onThemeToggle}>Toggle</div>
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
