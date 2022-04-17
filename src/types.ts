
import { PropsWithChildren } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { palette, config, named, } from './config';

// export type RecursivePartial<T> = {
//   [P in keyof T]?: RecursivePartial<T[P]>;
// };

export type NamedColor = keyof typeof named;
export type PaletteColor = keyof typeof palette;
export type UserColor = string & { hexish?: any };
export type DefinedColor = PaletteColor | NamedColor | UserColor;
export type ThemeColor<T extends Theme = Theme> = keyof T['colors'] & keyof T['schemes'];


export type Theme = typeof config;
// export type PartialTheme<T extends Theme = Theme> = RecursivePartial<T>;
export type ThemeMode = 'light' | 'dark';
export type ThemeGroup<T extends Theme = Theme> = { light: T, dark: T };

export interface ShadowProps {
  shadowColor?: DefinedColor;
  shadowOffset?: { width?: number, height?: number },
  shadowOpacity?: number;
  shadowRadius?: number;
}
export type NamedStyles = ViewStyle | TextStyle | ImageStyle;
export type StylesFn = <T extends Theme>(theme: T) => Record<string, NamedStyles>;

export type BaseProps<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<P> & {
  theme: Theme;
  styles: S;
}

export type BasePropsWithChildren<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<PropsWithChildren<P>> & {
  theme: Theme;
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
  current: T;
  mode: ThemeMode;
  modify: (theme: Record<string, any>) => T;
  replace: (theme: T) => T;
}