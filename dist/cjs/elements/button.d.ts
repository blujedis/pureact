import React from 'react';
import { DefinedColor, ShadowProps, Theme, ThemeColor } from '../types';
import { TouchableOpacityProps } from 'react-native';
import { IconProps } from './icon';
export declare type ButtonStyles = ReturnType<typeof styles>;
export declare type ButtonStylesEnabled = Partial<Record<keyof ButtonStyles, boolean>>;
export interface ButtonProps extends TouchableOpacityProps, ButtonStylesEnabled {
    color?: DefinedColor | ThemeColor;
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    round?: boolean;
    disabled?: boolean;
    size?: keyof Theme['button']['size'];
    opacity?: number;
    shadow?: ShadowProps;
    icon?: IconProps;
    scheme?: keyof Theme['schemes'];
}
declare const styles: (theme: Theme) => {
    default: {
        height: number;
        width: number;
        alignItems: "center";
        justifyContent: "center";
        margin: number;
    };
    capitalize: {
        textTransform: "capitalize";
    };
    lowercase: {
        textTransform: "lowercase";
    };
    uppercase: {
        textTransform: "uppercase";
    };
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
    transparent: import("../types").NamedStyles;
    primary: import("../types").NamedStyles;
    secondary: import("../types").NamedStyles;
    danger: import("../types").NamedStyles;
    warning: import("../types").NamedStyles;
    info: import("../types").NamedStyles;
    success: import("../types").NamedStyles;
};
declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<React.FC<ButtonProps>>>;
export default _default;
