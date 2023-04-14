import { useEffect, useState } from 'react';

export type themeOption = 'light' | 'dark';
export const useDarkMode = () => {
  const [theme, setTheme] = useState<themeOption>('dark');
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode: themeOption) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as themeOption;
    localTheme && setTheme(localTheme);
    setMountedComponent(true)
  }, []);
  return [theme, themeToggler, mountedComponent] as [themeOption, () => void, boolean];
};
