import Header from '@/components/common/Header';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Layout: FC<{ children: ReactNode; className: string }> = ({
  children,
  className,
}) => {
  return (
    <LayoutWrapper>
      <Header />
      <main className={className}>{children}</main>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  padding-top: 80px;
`;
