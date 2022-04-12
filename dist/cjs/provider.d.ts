import React, { PropsWithChildren } from 'react';
import { PureactContext, PureactOptions } from './types';
declare const ThemeContext: React.Context<PureactContext<{
    dark: boolean;
    global: {
        base: number;
        elevation: number;
    };
    schemes: {
        default: import("./types").NamedColor;
        primary: import("./types").NamedColor;
        secondary: import("./types").NamedColor;
        danger: import("./types").NamedColor;
        warning: import("./types").NamedColor;
        info: import("./types").NamedColor;
        success: import("./types").NamedColor;
        transparent: string;
    };
    colors: {
        text: import("./types").NamedColor;
        muted: import("./types").NamedColor;
        card: import("./types").NamedColor;
        notification: import("./types").NamedColor;
        background: import("./types").NamedColor;
        border: import("./types").NamedColor;
    };
    margin: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
    };
    padding: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
    };
    radius: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
    };
    input: {
        size: {
            md: {
                height: number;
            };
        };
    };
    button: {
        size: {
            md: {
                height: number;
                width: number;
            };
        };
    };
    typography: {
        color: import("./types").NamedColor;
        xs: number;
        sm: number;
        body: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
        h6: number;
    };
    icon: {
        size: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            x2l: number;
            x3l: number;
        };
    };
    shadow: {
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        shadowColor: import("./types").NamedColor;
    };
}>>;
declare function ThemeProvider(props: PropsWithChildren<PureactOptions>): JSX.Element;
declare const useTheme: () => PureactContext<{
    dark: boolean;
    global: {
        base: number;
        elevation: number;
    };
    schemes: {
        default: import("./types").NamedColor;
        primary: import("./types").NamedColor;
        secondary: import("./types").NamedColor;
        danger: import("./types").NamedColor;
        warning: import("./types").NamedColor;
        info: import("./types").NamedColor;
        success: import("./types").NamedColor;
        transparent: string;
    };
    colors: {
        text: import("./types").NamedColor;
        muted: import("./types").NamedColor;
        card: import("./types").NamedColor;
        notification: import("./types").NamedColor;
        background: import("./types").NamedColor;
        border: import("./types").NamedColor;
    };
    margin: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
    };
    padding: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
    };
    radius: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
    };
    input: {
        size: {
            md: {
                height: number;
            };
        };
    };
    button: {
        size: {
            md: {
                height: number;
                width: number;
            };
        };
    };
    typography: {
        color: import("./types").NamedColor;
        xs: number;
        sm: number;
        body: number;
        md: number;
        lg: number;
        xl: number;
        x2l: number;
        x3l: number;
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
        h6: number;
    };
    icon: {
        size: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            x2l: number;
            x3l: number;
        };
    };
    shadow: {
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        shadowColor: import("./types").NamedColor;
    };
}>;
export { ThemeContext, ThemeProvider, useTheme };
