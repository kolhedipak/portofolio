import { useState, useEffect } from 'react';

export function useTheme() {
  // const [theme, setTheme] = useState<'dark' | 'light'>(
  //   window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  // );
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}