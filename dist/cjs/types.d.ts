import { PropsWithChildren } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { palette, config, html } from './config';
export declare type HtmlColorName = keyof typeof html;
export declare type PaletteName = keyof typeof palette;
export declare type UserColor = string & {
    hexish?: any;
};
export declare type NamedColor = PaletteName | HtmlColorName | UserColor;
export declare type ThemeColors<T extends Theme = Theme> = Record<keyof T['colors'], UserColor> & Record<keyof T['schemes'], UserColor>;
export declare type Theme = typeof config;
export declare type ThemeMode = 'light' | 'dark';
export declare type ThemeGroup<T extends Theme = Theme> = {
    light: T;
    dark: T;
};
export declare type ThemeNormalized<T extends Theme = Theme> = Omit<T, 'colors'> & {
    colors: ThemeColors<T>;
};
export interface ShadowProps {
    shadowColor?: NamedColor;
    shadowOffset?: {
        width?: number;
        height?: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
}
export declare type NamedStyles = ViewStyle | TextStyle | ImageStyle;
export declare type StylesFn = <T extends ThemeNormalized>(theme: T) => Record<string, NamedStyles>;
export declare type BaseProps<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<P> & {
    theme: ThemeNormalized;
    styles: S;
};
export declare type BasePropsWithChildren<P extends Record<string, any>, S extends ReturnType<StylesFn> = ReturnType<StylesFn>> = Required<PropsWithChildren<P>> & {
    theme: ThemeNormalized;
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
    current: ThemeNormalized<T>;
    mode: ThemeMode;
    modify: (theme: Record<string, any>) => ThemeNormalized<T>;
    replace: (theme: T) => ThemeNormalized<T>;
}
