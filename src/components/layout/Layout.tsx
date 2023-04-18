import { Header, SideBar, Footer } from '@/components/common';
import { StyledContainer } from '@/components/common/StyledUI';
import { themeOption } from '@/hooks/useDarkMode';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
  className: string;
  onToggleTheme: () => void;
  theme: themeOption;
}
const Layout: FC<LayoutProps> = ({
  children,
  className,
  onToggleTheme,
  theme,
}) => {
  return (
    <LayoutWrapper>
      <LineBackground />
      <Header />
      <SideBar onThemeToggle={onToggleTheme} theme={theme}></SideBar>
      <Main className={className}>{children}</Main>
      {/* <Footer /> */}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  padding-top: var(--header-height);
`;

const Main = styled.main`
  overflow: hidden;
  min-height: calc(100vh - var(--header-height));
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Lines = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
      90deg,
      ${({ theme: { color } }) => color.border},
      transparent 1px,
      transparent,
      transparent calc(100% / 3),
      ${({ theme: { color } }) => color.border} calc((100% / 3) + 1px),
      transparent calc((100% / 3) + 1px)
    ),
    linear-gradient(
      90deg,
      transparent,
      transparent calc((100% / 3 * 2) - 1px),
      ${({ theme: { color } }) => color.border} calc(100% / 3 * 2),
      transparent calc(100% / 3 * 2),
      transparent calc((100% / 3 * 2) - 1px),
      transparent calc(100% - 1px),
      ${({ theme: { color } }) => color.border} 100%
    );
  transform: translate3d(0, 0, 0);
`;

const LineBackground = () => (
  <Background>
    <StyledContainer>
      <Lines />
    </StyledContainer>
  </Background>
);
