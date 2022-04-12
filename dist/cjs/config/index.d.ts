import palette from './palette';
import html from './html';
declare const config: {
    dark: boolean;
    global: {
        base: number;
        elevation: number;
    };
    schemes: {
        default: import("..").NamedColor;
        primary: import("..").NamedColor;
        secondary: import("..").NamedColor;
        danger: import("..").NamedColor;
        warning: import("..").NamedColor;
        info: import("..").NamedColor;
        success: import("..").NamedColor;
        transparent: string;
    };
    colors: {
        text: import("..").NamedColor;
        muted: import("..").NamedColor;
        card: import("..").NamedColor;
        notification: import("..").NamedColor;
        background: import("..").NamedColor;
        border: import("..").NamedColor;
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
        color: import("..").NamedColor;
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
        shadowColor: import("..").NamedColor;
    };
};
export { html, palette, config };
