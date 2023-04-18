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
  width: 4.8rem;
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
  width: 4.8rem;
  height: 2.6rem;
  border-radius: 4.8rem;
  position: relative;
  padding: .4rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: ${({ theme: { color } }) => color.background};
  border: .2rem solid ${({ theme: { color } }) => color.text.normal};
  .ball {
    background-color: ${({ theme: { color } }) => color.text.normal};
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    left: .3rem;
    top: .3rem;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }
  svg {
    color: ${({ theme: { color } }) => color.text.normal};
    width: 1.6rem;
    height: 1.6rem;
  }
  &.light .ball {
    transform: translateX(2.2rem);
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  li:not(:last-child) {
    margin-bottom: 1rem;
  }
  a {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
  }
  img {
    width: 100%;
  }
`;
