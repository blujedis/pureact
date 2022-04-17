import { PropsWithChildren } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { palette, config, named } from './config';
export declare type NamedColor = keyof typeof named;
export declare type PaletteColor = keyof typeof palette;
export declare type UserColor = string & {
    hexish?: any;
};
export declare type DefinedColor = PaletteColor | NamedColor | UserColor;
export declare type ThemeColor<T extends Theme = Theme> = keyof T['colors'] & keyof T['schemes'];
export declare type Theme = typeof config;
export declare type ThemeMode = 'light' | 'dark';
export declare type ThemeGroup<T extends Theme = Theme> = {
    light: T;
    dark: T;
};
export interface ShadowProps {
    shadowColor?: DefinedColor;
    shadowOffset?: {
        width?: number;
        height?: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
}
export declare type NamedStyles = ViewStyle | TextStyle | ImageStyle;
export declare type StylesFn = <T extends Theme>(theme: T) => Record<string, NamedStyles>;
export declare type BaseProps<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<P> & {
    theme: Theme;
    styles: S;
};
export declare type BasePropsWithChildren<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<PropsWithChildren<P>> & {
    theme: Theme;
    styles: S;
};
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
