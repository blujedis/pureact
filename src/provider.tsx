import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { PureactContext, PureactOptions, ThemeMode } from './types';
import { mergeObject } from './utils/helpers'
import { defaultTheme } from './themes';

const ThemeContext = createContext({} as PureactContext);
ThemeContext.displayName = 'PureactContext';

function ThemeProvider(props: PropsWithChildren<PureactOptions>) {

  props = {
    theme: defaultTheme.light,
    ...props
  }

  const { children, theme: initTheme } = props as Required<PropsWithChildren<PureactOptions>>;

  const [activeTheme, setActiveTheme] = useState(initTheme);

  const ctx: PureactContext = {

    current: activeTheme,
    mode: (activeTheme.dark ? 'dark' : 'light') as ThemeMode,

    modify: (theme) => {
      const newTheme = mergeObject(activeTheme, theme);
      setActiveTheme(newTheme);
      return newTheme;
    },

    replace: (theme) => {
      setActiveTheme(theme);
      return theme;
    }

  };

  return (
    <ThemeContext.Provider value={ctx}>
      {children}
    </ThemeContext.Provider>
  );

}

const useTheme = () => {
  return useContext(ThemeContext);
};

export {
  ThemeContext,
  ThemeProvider,
  useTheme
};





