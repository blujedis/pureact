import React, { PropsWithChildren } from 'react';
import { PureactContext, PureactOptions } from './types';
declare const ThemeContext: React.Context<PureactContext<{
    dark: boolean;
    global: {
        base: number;
        elevation: number;
    };
    schemes: {
        default: import("./types").DefinedColor;
        primary: import("./types").DefinedColor;
        secondary: import("./types").DefinedColor;
        danger: import("./types").DefinedColor;
        warning: import("./types").DefinedColor;
        info: import("./types").DefinedColor;
        success: import("./types").DefinedColor;
        transparent: string;
    };
    colors: {
        text: import("./types").DefinedColor;
        muted: import("./types").DefinedColor;
        card: import("./types").DefinedColor;
        notification: import("./types").DefinedColor;
        background: import("./types").DefinedColor;
        border: import("./types").DefinedColor;
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
            sm: {
                height: number;
            };
            md: {
                height: number;
            };
            lg: {
                height: number;
            };
        };
    };
    button: {
        size: {
            sm: {
                height: number;
                width: number;
            };
            md: {
                height: number;
                width: number;
            };
            lg: {
                height: number;
                width: number;
            };
        };
    };
    typography: {
        color: import("./types").DefinedColor;
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
        shadowColor: import("./types").DefinedColor;
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
        default: import("./types").DefinedColor;
        primary: import("./types").DefinedColor;
        secondary: import("./types").DefinedColor;
        danger: import("./types").DefinedColor;
        warning: import("./types").DefinedColor;
        info: import("./types").DefinedColor;
        success: import("./types").DefinedColor;
        transparent: string;
    };
    colors: {
        text: import("./types").DefinedColor;
        muted: import("./types").DefinedColor;
        card: import("./types").DefinedColor;
        notification: import("./types").DefinedColor;
        background: import("./types").DefinedColor;
        border: import("./types").DefinedColor;
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
            sm: {
                height: number;
            };
            md: {
                height: number;
            };
            lg: {
                height: number;
            };
        };
    };
    button: {
        size: {
            sm: {
                height: number;
                width: number;
            };
            md: {
                height: number;
                width: number;
            };
            lg: {
                height: number;
                width: number;
            };
        };
    };
    typography: {
        color: import("./types").DefinedColor;
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
        shadowColor: import("./types").DefinedColor;
    };
}>;
export { ThemeContext, ThemeProvider, useTheme };
