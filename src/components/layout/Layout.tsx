import Header from '@/components/common/Header';
import React, { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
