import React from 'react';
import { ViewProps } from 'react-native';
import { IconFamily } from '../utils/icons';
import { NamedColor, ThemeNormalized } from '../types';
export declare type IconStyles = ReturnType<typeof styles>;
export declare type IconStylesEnabled = Partial<Record<keyof IconStyles, boolean>>;
export interface IconProps extends ViewProps, IconStylesEnabled {
    family: IconFamily;
    name: string;
    size?: number;
    color?: NamedColor;
}
declare const styles: (theme: ThemeNormalized) => {};
declare const _default: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<React.FC<IconProps>>>;
export default _default;
