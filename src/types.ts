
import { PropsWithChildren } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { palette, config, html, } from './config';

// export type RecursivePartial<T> = {
//   [P in keyof T]?: RecursivePartial<T[P]>;
// };

export type HtmlColorName = keyof typeof html;
export type PaletteName = keyof typeof palette;
export type UserColor = string & { hexish?: any };
export type NamedColor =  PaletteName | HtmlColorName | UserColor;
export type ThemeColors<T extends Theme = Theme> = Record<keyof T['colors'], UserColor> & Record<keyof T['schemes'], UserColor>;

export type Theme = typeof config;
// export type PartialTheme<T extends Theme = Theme> = RecursivePartial<T>;
export type ThemeMode = 'light' | 'dark';
export type ThemeGroup<T extends Theme = Theme> = { light: T, dark: T };
export type ThemeNormalized<T extends Theme = Theme> = Omit<T, 'colors'> & {
  colors: ThemeColors<T>
};

export interface ShadowProps {
  shadowColor?: NamedColor;
  shadowOffset?: { width?: number, height?: number },
  shadowOpacity?: number;
  shadowRadius?: number;
}
export type NamedStyles = ViewStyle | TextStyle | ImageStyle;
export type StylesFn = <T extends ThemeNormalized>(theme: T) => Record<string, NamedStyles>;

export type BaseProps<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<P> & {
  theme: ThemeNormalized;
  styles: S;
}

export type BasePropsWithChildren<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<PropsWithChildren<P>> & {
  theme: ThemeNormalized;
  styles: S;
}

export interface PureactStoredTheme {
  name: string;
  mode: ThemeMode;
  deviceMode?: ThemeMode;
}

export interface PureactOptions<T extends Theme = Theme> {
  theme?: T;
}

export interface PureactContext<T extends Theme = Theme> {
  current: ThemeNormalized<T>;
  mode: ThemeMode;
  modify: (theme: Record<string, any>) => ThemeNormalized<T>;
  replace: (theme: T) => ThemeNormalized<T>;
}