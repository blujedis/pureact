import { Theme, DefinedColor, NamedStyles } from '../types';
export declare const noop: (...args: unknown[]) => void;
/**
 * Merges source into target object with optional extend for merging other values.
 *
 * @param target the target to merge into.
 * @param source the source to merge from into target.
 */
export declare const mergeObject: <T extends Record<string, any>, S extends Record<string, any>>(target: T, source: S, allowUndefined?: boolean) => T & S;
/**
 * Creates a theme, merging overrides while specifying mode type.
 *
 * @param isDark indicates the theme is a dark mode theme.
 * @param extend values to extend to base theme.
 * @param base the theme to extend, if not specified uses default.
 */
export declare const createTheme: <C extends Record<string, any>, B extends Record<string, any> = {
    dark: boolean;
    global: {
        base: number;
        elevation: number;
    };
    schemes: {
        default: DefinedColor;
        primary: DefinedColor;
        secondary: DefinedColor;
        danger: DefinedColor;
        warning: DefinedColor;
        info: DefinedColor;
        success: DefinedColor;
        transparent: string;
    };
    colors: {
        text: DefinedColor;
        muted: DefinedColor;
        card: DefinedColor;
        notification: DefinedColor;
        background: DefinedColor;
        border: DefinedColor;
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
        color: DefinedColor;
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
        shadowColor: DefinedColor;
    };
}>(isDark?: boolean, extend?: C, base?: B) => B & C & {
    dark: boolean;
};
/**
 * Merges palette colors, html named colors and theme colors into single object.
 *
 * @param theme optional theme to extract colors from.
 */
export declare function createColorMap<T extends Theme>(theme: T): {
    text: DefinedColor;
    muted: DefinedColor;
    card: DefinedColor;
    notification: DefinedColor;
    background: DefinedColor;
    border: DefinedColor;
    aliceblue: string;
    antiquewhite: string;
    aqua: string;
    aquamarine: string;
    azure: string;
    beige: string;
    bisque: string;
    black: string;
    blanchedalmond: string;
    blue: string;
    blueviolet: string;
    brown: string;
    burlywood: string;
    cadetblue: string;
    chartreuse: string;
    chocolate: string;
    coral: string;
    cornflowerblue: string;
    cornsilk: string;
    crimson: string;
    cyan: string;
    darkblue: string;
    darkcyan: string;
    darkgoldenrod: string;
    darkgray: string;
    darkgreen: string;
    darkkhaki: string;
    darkmagenta: string;
    darkolivegreen: string;
    darkorange: string;
    darkorchid: string;
    darkred: string;
    darksalmon: string;
    darkseagreen: string;
    darkslateblue: string;
    darkslategray: string;
    darkturquoise: string;
    darkviolet: string;
    deeppink: string;
    deepskyblue: string;
    dimgray: string;
    dodgerblue: string;
    firebrick: string;
    floralwhite: string;
    forestgreen: string;
    fuchsia: string;
    gainsboro: string;
    ghostwhite: string;
    gold: string;
    goldenrod: string;
    gray: string;
    green: string;
    greenyellow: string;
    honeydew: string;
    hotpink: string;
    'indianred ': string;
    indigo: string;
    ivory: string;
    khaki: string;
    lavender: string;
    lavenderblush: string;
    lawngreen: string;
    lemonchiffon: string;
    lightblue: string;
    lightcoral: string;
    lightcyan: string;
    lightgoldenrodyellow: string;
    lightgrey: string;
    lightgreen: string;
    lightpink: string;
    lightsalmon: string;
    lightseagreen: string;
    lightskyblue: string;
    lightslategray: string;
    lightsteelblue: string;
    lightyellow: string;
    lime: string;
    limegreen: string;
    linen: string;
    magenta: string;
    maroon: string;
    mediumaquamarine: string;
    mediumblue: string;
    mediumorchid: string;
    mediumpurple: string;
    mediumseagreen: string;
    mediumslateblue: string;
    mediumspringgreen: string;
    mediumturquoise: string;
    mediumvioletred: string;
    midnightblue: string;
    mintcream: string;
    mistyrose: string;
    moccasin: string;
    navajowhite: string;
    navy: string;
    oldlace: string;
    olive: string;
    olivedrab: string;
    orange: string;
    orangered: string;
    orchid: string;
    palegoldenrod: string;
    palegreen: string;
    paleturquoise: string;
    palevioletred: string;
    papayawhip: string;
    peachpuff: string;
    peru: string;
    pink: string;
    plum: string;
    powderblue: string;
    /**
     * Creates map of color schemes.
     *
     * @param theme the active theme.
     * @param key the key for creating the scheme.
     */
    purple: string;
    rebeccapurple: string;
    red: string;
    rosybrown: string;
    royalblue: string;
    saddlebrown: string;
    salmon: string;
    sandybrown: string;
    seagreen: string;
    seashell: string;
    sienna: string;
    silver: string;
    skyblue: string;
    slateblue: string;
    slategray: string;
    snow: string;
    springgreen: string;
    steelblue: string;
    tan: string;
    teal: string;
    thistle: string;
    tomato: string;
    turquoise: string;
    violet: string;
    wheat: string;
    white: string;
    whitesmoke: string;
    yellow: string;
    yellowgreen: string;
    transparent: string;
    slate: string;
    slate50: string;
    slate100: string;
    slate200: string;
    slate300: string;
    slate400: string;
    slate500: string;
    slate600: string;
    slate700: string;
    slate800: string;
    slate900: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    zinc: string;
    zinc50: string;
    zinc100: string;
    zinc200: string;
    zinc300: string;
    zinc400: string;
    zinc500: string;
    zinc600: string;
    zinc700: string;
    zinc800: string;
    zinc900: string;
    neutral: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    stone: string;
    stone50: string;
    stone100: string;
    stone200: string;
    stone300: string;
    stone400: string;
    stone500: string;
    stone600: string;
    stone700: string;
    stone800: string;
    stone900: string;
    red50: string;
    red100: string;
    red200: string;
    red300: string;
    red400: string;
    red500: string;
    red600: string;
    red700: string;
    red800: string;
    red900: string;
    orange50: string;
    orange100: string;
    orange200: string;
    orange300: string;
    orange400: string;
    orange500: string;
    orange600: string;
    orange700: string;
    orange800: string;
    orange900: string;
    amber: string;
    amber50: string;
    amber100: string;
    amber200: string;
    amber300: string;
    amber400: string;
    amber500: string;
    amber600: string;
    amber700: string;
    amber800: string;
    amber900: string;
    yellow50: string;
    yellow100: string;
    yellow200: string;
    yellow300: string;
    yellow400: string;
    yellow500: string;
    yellow600: string;
    yellow700: string;
    yellow800: string;
    yellow900: string;
    lime50: string;
    lime100: string;
    lime200: string;
    lime300: string;
    lime400: string;
    lime500: string;
    lime600: string;
    lime700: string;
    lime800: string;
    lime900: string;
    green50: string;
    green100: string;
    green200: string;
    green300: string;
    green400: string;
    green500: string;
    green600: string;
    green700: string;
    green800: string;
    green900: string;
    emerald: string;
    emerald50: string;
    emerald100: string;
    emerald200: string;
    emerald300: string;
    emerald400: string;
    emerald500: string;
    emerald600: string;
    emerald700: string;
    emerald800: string;
    emerald900: string;
    teal50: string;
    teal100: string;
    teal200: string;
    teal300: string;
    teal400: string;
    teal500: string;
    teal600: string;
    teal700: string;
    teal800: string;
    teal900: string;
    cyan50: string;
    cyan100: string;
    cyan200: string;
    cyan300: string;
    cyan400: string;
    cyan500: string;
    cyan600: string;
    cyan700: string;
    cyan800: string;
    cyan900: string;
    sky: string;
    sky50: string;
    sky100: string;
    sky200: string;
    sky300: string;
    sky400: string;
    sky500: string;
    sky600: string;
    sky700: string;
    sky800: string;
    sky900: string;
    blue50: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
    blue500: string;
    blue600: string;
    blue700: string;
    blue800: string;
    blue900: string;
    indigo50: string;
    indigo100: string;
    indigo200: string;
    indigo300: string;
    indigo400: string;
    indigo500: string;
    indigo600: string;
    indigo700: string;
    indigo800: string;
    indigo900: string;
    violet50: string;
    violet100: string;
    violet200: string;
    violet300: string;
    violet400: string;
    violet500: string;
    violet600: string;
    violet700: string;
    violet800: string;
    violet900: string;
    purple50: string;
    purple100: string;
    purple200: string;
    purple300: string;
    purple400: string;
    purple500: string;
    purple600: string;
    purple700: string;
    purple800: string;
    purple900: string;
    fuschia: string;
    fuschia50: string;
    fuschia100: string;
    fuschia200: string;
    fuschia300: string;
    fuschia400: string;
    fuschia500: string;
    fuschia600: string;
    fuschia700: string;
    fuschia800: string;
    fuschia900: string;
    pink50: string;
    pink100: string;
    pink200: string;
    pink300: string;
    pink400: string;
    pink500: string;
    pink600: string;
    pink700: string;
    pink800: string;
    pink900: string;
    rose: string;
    rose50: string;
    rose100: string;
    rose200: string;
    rose300: string;
    rose400: string;
    rose500: string;
    rose600: string;
    rose700: string;
    rose800: string;
    rose900: string;
    brown50: string;
    brown100: string;
    brown200: string;
    brown300: string;
    brown400: string;
    brown500: string;
    brown600: string;
    brown700: string;
    brown800: string;
    brown900: string;
    carbon: string;
    carbon50: string;
    carbon100: string;
    carbon200: string;
    carbon300: string;
    carbon400: string;
    carbon500: string;
    carbon600: string;
    carbon700: string;
    carbon800: string;
    carbon900: string;
};
/**
 * Converts named color to mapped value.
 *
 * @param color the named color to be converted.
 */
export declare function toColor(color: DefinedColor, theme?: Theme): string;
/**
 * Normalizes theme converting values as needed or ensuring defaults.
 *
 * @param theme the theme to be normalized.
 */
/**
 * Creates map of color schemes.
 *
 * @param theme the active theme.
 * @param key the key for creating the scheme.
 */
export declare const createSchemes: <T extends {
    dark: boolean;
    global: {
        base: number;
        elevation: number;
    };
    schemes: {
        default: DefinedColor;
        primary: DefinedColor;
        secondary: DefinedColor;
        danger: DefinedColor;
        warning: DefinedColor;
        info: DefinedColor;
        success: DefinedColor;
        transparent: string;
    };
    colors: {
        text: DefinedColor;
        muted: DefinedColor;
        card: DefinedColor;
        notification: DefinedColor;
        background: DefinedColor;
        border: DefinedColor;
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
        color: DefinedColor;
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
        shadowColor: DefinedColor;
    };
}, K extends "color" | "backgroundColor" | "borderColor">(theme: T, key?: K[]) => Record<"transparent" | "default" | "primary" | "secondary" | "danger" | "warning" | "info" | "success", NamedStyles>;
