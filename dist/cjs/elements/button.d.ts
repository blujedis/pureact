import React from 'react';
import { NamedColor, NamedStyles, ShadowProps, ThemeNormalized } from '../types';
import { TouchableOpacityProps } from 'react-native';
import { IconProps } from './icon';
export declare type ButtonStyles = ReturnType<typeof styles>;
export declare type ButtonStylesEnabled = Partial<Record<keyof ButtonStyles, boolean>>;
export interface ButtonProps extends TouchableOpacityProps, ButtonStylesEnabled {
    color?: NamedColor;
    transform?: 'capitalize' | 'uppercase' | 'lowercase';
    round?: boolean;
    disabled?: boolean;
    size?: number;
    opacity?: number;
    shadow?: ShadowProps;
    icon?: IconProps;
    scheme?: keyof ThemeNormalized['schemes'];
}
declare const styles: (theme: ThemeNormalized) => {
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
    transparent: NamedStyles;
    primary: NamedStyles;
    secondary: NamedStyles;
    danger: NamedStyles;
    warning: NamedStyles;
    info: NamedStyles;
    success: NamedStyles;
};
declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<React.FC<ButtonProps>>>;
export default _default;
