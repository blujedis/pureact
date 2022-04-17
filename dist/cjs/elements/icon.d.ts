import React from 'react';
import { IconFamily, IconNames } from '../utils/icons';
import { DefinedColor, ThemeColor, Theme } from '../types';
export declare type IconStyles = ReturnType<typeof styles>;
export declare type IconStylesEnabled = Partial<Record<keyof IconStyles, boolean>>;
export interface IconProps<F extends IconFamily = IconFamily> extends IconStylesEnabled {
    family: F;
    name: IconNames<F>;
    size?: keyof Theme['icon']['size'] | number;
    color?: DefinedColor | ThemeColor;
}
declare const styles: (theme: Theme) => {};
declare const _default: React.ForwardRefExoticComponent<IconProps<"FontAwesome" | "Fontisto" | "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "Foundation" | "Ionicons" | "MaterialIcons" | "MaterialCommunityIcons" | "Octicons" | "SimpleLineIcons" | "Zocial"> & React.RefAttributes<React.FC<IconProps<"FontAwesome" | "Fontisto" | "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "Foundation" | "Ionicons" | "MaterialIcons" | "MaterialCommunityIcons" | "Octicons" | "SimpleLineIcons" | "Zocial">>>>;
export default _default;
