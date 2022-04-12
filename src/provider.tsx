import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { PureactContext, PureactOptions, ThemeMode, ThemeNormalized } from './types';
import { mergeObject } from './utils/helpers'
import { normalizeTheme } from './utils/helpers';
import { defaultTheme } from './themes';

const ThemeContext = createContext({} as PureactContext);
ThemeContext.displayName = 'PureactContext';

function ThemeProvider(props: PropsWithChildren<PureactOptions>) {

  props = {
    theme: defaultTheme.light,
    ...props
  }

  const { children, theme: initTheme } = props as Required<PropsWithChildren<PureactOptions>>;

  const [activeTheme, setActiveTheme] = useState(normalizeTheme(initTheme));

  const ctx: PureactContext = {

    current: activeTheme,

    mode: (activeTheme.dark ? 'dark' : 'light') as ThemeMode,

    modify: (theme) => {
      const newTheme = mergeObject(activeTheme, theme);
      const normalized = normalizeTheme(newTheme) as unknown as ThemeNormalized;
      setActiveTheme(normalized);
      return normalized;
    },

    replace: (theme) => {
      const normalized = normalizeTheme(theme);
      setActiveTheme(normalized);
      return normalized;
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





