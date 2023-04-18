import { themeOption } from '@/hooks/useDarkMode';
import { FC } from 'react';
import styled from 'styled-components';
import GithubDark from '@/assets/icons/github-mark.svg';
import GithubLight from '@/assets/icons/github-mark-white.svg';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

interface SideBarProps {
  onThemeToggle: () => void;
  theme: themeOption;
}
const SideBar: FC<SideBarProps> = ({ onThemeToggle, theme }) => {
  console.log(GithubDark);
  return (
    <>
      <SideBarLeft>
        <ToggleButton
          onClick={onThemeToggle}
          className={theme === 'light' ? 'light' : 'dark'}
        >
          <LightModeOutlinedIcon />
          <DarkModeOutlinedIcon />
          <div className="ball" />
        </ToggleButton>
      </SideBarLeft>
      <SideBarRight>
        <SocialLinks>
          <li>
            <a href="#">
              <img
                src={theme === 'light' ? GithubDark.src : GithubLight.src}
                alt="Github"
              />
            </a>
          </li>
        </SocialLinks>
      </SideBarRight>
    </>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  bottom: var(--space-side-header);
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const SideBarLeft = styled(StyledSideBar)`
  left: var(--space-side-header);
  align-items: flex-start;
`;
const SideBarRight = styled(StyledSideBar)`
  right: var(--space-side-header);
  align-items: flex-end;
`;
const ToggleButton = styled.button`
  width: 48px;
  height: 26px;
  border-radius: 48px;
  position: relative;
  padding: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: ${({ theme: { color } }) => color.background};
  border: 2px solid ${({ theme: { color } }) => color.text.normal};
  .ball {
    background-color: ${({ theme: { color } }) => color.text.normal};
    width: 16px;
    height: 16px;
    position: absolute;
    left: 3px;
    top: 3px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }
  svg {
    color: ${({ theme: { color } }) => color.text.normal};
    width: 16px;
    height: 16px;
  }
  &.light .ball {
    transform: translateX(22px);
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  li:not(:last-child) {
    margin-bottom: 10px;
  }
  a {
    display: block;
    width: 24px;
    height: 24px;
  }
  img {
    width: 100%;
  }
`;
