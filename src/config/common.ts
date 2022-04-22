import { } from 'react-native';
import palette from './palette';
import { DefinedColor } from '../types';

const base = 16;

export const global = {
  base,
};

// will be merged with colors below.
export const schemes = {
  default: palette.slate200 as DefinedColor,
  primary: palette.indigo600 as DefinedColor,
  secondary: palette.carbon600 as DefinedColor,
  danger: palette.rose600 as DefinedColor,
  warning: palette.yellow600 as DefinedColor,
  info: palette.sky600 as DefinedColor,
  success: palette.emerald600 as DefinedColor,
  transparent: palette.transparent
};

export const colors = {
  text: palette.slate700 as DefinedColor,
  card: palette.slate100 as DefinedColor,
  notification: palette.rose600 as DefinedColor,
  background: palette.slate50 as DefinedColor,
  border: palette.slate200 as DefinedColor,
  muted: palette.slate200 as DefinedColor,
};

export const typography = {
  xs: base * 0.65,
  sm: base * 0.75,
  body: base * 0.875,
  md: base * 0.875,
  lg: base,
  xl: base * 1.25,
  x2l: base * 1.5,
  x3l: base * 1.75,
  h6: base * 1.125,
  h5: base * 1.3125,
  h4: base * 1.5,
  h3: base * 1.875,
  h2: base * 2.375,
  h1: base * 2.75,
};

export const margin = {
  none: 0,
  xs: base * .25,
  sm: base * .5,
  md: base * .75,
  lg: base,
  xl: base * 1.25,
  x2l: base * 1.5,
  x3l: base * 1.75
};

export const padding = {
  ...margin
};

export const radius = {
  none: 0,
  xs: base * .125,
  sm: base * .25,
  md: base * .35,
  lg: base * .5,
  xl: base * .75,
  x2l: base,
  x3l: base * 1.25
};

export const icon = {
  size: {
    xs: base * .5,
    sm: base * .75,
    md: base,
    lg: base * 1.5,
    xl: base * 1.75,
    x2l: base * 2,
    x3l: base * 2.25
  }
}

export const input = {
  size: {
    sm: { height: base * 2.75 },
    md: { height: base * 3 },
    lg: { height: base * 3.25 },
  }
};

export const button = {
  size: {
    sm: {
      height: input.size.sm.height,
      width: input.size.sm.height * 1.6
    },
    md: {
      height: input.size.md.height,
      width: input.size.md.height * 1.6
    },
    lg: {
      height: input.size.lg.height,
      width: input.size.lg.height * 1.6
    }
  }
};

export const shadow = {
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3,
  shadowColor: 'rgba(0,0,0, 0.3)' as DefinedColor,
  elevation: 1
};




