import Header from '@/components/common/Header';
import SideBar from '@/components/common/SideBar';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
  className: string;
  onToggleTheme: () => void;
}
const Layout: FC<LayoutProps> = ({ children, className, onToggleTheme }) => {
  return (
    <LayoutWrapper>
      <Header />
      <SideBar onThemeToggle={onToggleTheme}></SideBar>
      <main className={className}>{children}</main>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  padding-top: var(--header-height);
`;
