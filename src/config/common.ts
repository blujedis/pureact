
import palette from './palette';
import { NamedColor } from '../types';

const base = 16;

export const global = {
  base,
  elevation: 1
};

// will be merged with colors below.
export const schemes = {
  default: palette.slate200 as NamedColor,
  primary: palette.indigo600 as NamedColor,
  secondary: palette.carbon600 as NamedColor,
  danger: palette.rose600 as NamedColor,
  warning: palette.yellow600 as NamedColor,
  info: palette.sky600 as NamedColor,
  success: palette.emerald600 as NamedColor,
  transparent: palette.transparent
};

export const colors = {
  text: palette.slate700 as NamedColor,
  muted: palette.slate100 as NamedColor,
  card: palette.slate100 as NamedColor,
  notification: palette.rose600 as NamedColor,
  background: palette.slate50 as NamedColor,
  border: palette.slate200 as NamedColor,
};

export const typography = {
  color: colors.text,
  xs: base * 0.65,
  sm: base * 0.75,
  body: base * 0.875,
  md: base * 0.875,
  lg: base,
  xl: base * 1.25,
  x2l: base * 1.5,
  x3l: base * 1.75,
  h1: base * 2.75,
  h2: base * 2.375,
  h3: base * 1.875,
  h4: base * 1.5,
  h5: base * 1.3125,
  h6: base * 1.125,
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
    md: {
      height: base * 3
    }
  }
};

export const button = {
  size: {
    md: {
      height: input.size.md.height,
      width: input.size.md.height * 1.6
    }
  }
};

export const shadow = {
  shadowOffset: { width: 1, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3,
  shadowColor: 'rgba(0,0,0, 0.3)' as NamedColor,
};




