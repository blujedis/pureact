import React from 'react';
import { ThemeNormalized } from '../types';
import { ViewProps } from 'react-native';
export declare type BlockStyles = ReturnType<typeof styles>;
export declare type BlockStylesEnabled = Partial<Record<keyof BlockStyles, boolean>>;
export interface BlockProps extends ViewProps, BlockStylesEnabled {
    flex?: boolean | number;
    height?: number;
    width?: number;
    shadowColor?: string;
    space?: number;
    safe?: boolean;
}
declare const styles: (theme: ThemeNormalized) => {
    column: {
        flexDirection: "column";
    };
    row: {
        flexDirection: "row";
    };
    fluid: {
        width: string;
    };
    middle: {
        alignItems: "center";
        justifyContent: "center";
    };
    center: {
        alignItems: "center";
        alignSelf: "center";
    };
    left: {
        alignItems: "flex-start";
    };
    right: {
        alignItems: "flex-end";
    };
    top: {
        alignItems: "flex-start";
        alignSelf: "flex-start";
    };
    bottom: {
        alignItems: "flex-end";
        alignSelf: "flex-end";
    };
    card: {
        borderRadius: number;
        borderWidth: number;
        borderColor: import("../types").UserColor;
    };
    shadow: {
        elevation: number;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        shadowColor: import("../types").NamedColor;
    };
};
declare const _default: React.ForwardRefExoticComponent<BlockProps & React.RefAttributes<React.FC<BlockProps>>>;
export default _default;
