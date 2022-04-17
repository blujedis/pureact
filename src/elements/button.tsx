import React, { FC } from 'react';
import { BasePropsWithChildren, DefinedColor,ShadowProps, Theme, ThemeColor } from '../types';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle, Text } from 'react-native';
import { withPureact } from '../withPureact';
import { IconProps } from './icon';
import { createSchemes, toColor } from '../utils/helpers';

export type ButtonStyles = ReturnType<typeof styles>;
export type ButtonStylesEnabled = Partial<Record<keyof ButtonStyles, boolean>>;

export interface ButtonProps extends TouchableOpacityProps, ButtonStylesEnabled {
  color?: DefinedColor | ThemeColor;
  transform?: 'capitalize' | 'uppercase' | 'lowercase',
  round?: boolean;
  disabled?: boolean;
  size?: keyof Theme['button']['size'];
  opacity?: number;
  shadow?: ShadowProps;
  icon?: IconProps;
  scheme?: keyof Theme['schemes'];
}

const Button: FC<ButtonProps> = (props) => {
  props = {
    ...props
  };
  const { children, scheme, styles, disabled, opacity, transform, style, color } = props as BasePropsWithChildren<ButtonProps, ButtonStyles>

  const buttonStyle = [
    styles.default,
    transform && transform === 'capitalize' && styles.capitalize,
    transform && transform === 'lowercase' && styles.lowercase,
    transform && transform === 'uppercase' && styles.uppercase,
    scheme && styles[scheme] && styles[scheme],
    color && toColor(color),
    { zIndex: 10 },
    style && style
  ] as ViewStyle;

  const getContent = () => {
    const isString = children && typeof children === 'string';
    if (isString) 
      return <Text>{children}</Text>;
    return children;
  };

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={opacity} style={buttonStyle}>
      {getContent()}
    </TouchableOpacity>
  );
};

const styles = (theme: Theme) => {

  const schemes = createSchemes(theme);

  return StyleSheet.create({
    ...schemes,
    default: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
      ...theme.button.size.md
    },
    capitalize: {
      textTransform: 'capitalize'
    },
    lowercase: {
      textTransform: 'lowercase'
    },
    uppercase: {
      textTransform: 'uppercase'
    },
    sm: {
      ...theme.button.size.sm
    },
    md: {
      ...theme.button.size.md
    },
    lg: {
      ...theme.button.size.lg
    }
  });

};

export default withPureact(Button, styles);