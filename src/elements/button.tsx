import React, { FC } from 'react';
import { BasePropsWithChildren, NamedColor, NamedStyles, ShadowProps, ThemeNormalized } from '../types';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { withPureact } from '../withPureact';
import { IconProps } from './icon';

export type ButtonStyles = ReturnType<typeof styles>;
export type ButtonStylesEnabled = Partial<Record<keyof ButtonStyles, boolean>>;

export interface ButtonProps extends TouchableOpacityProps, ButtonStylesEnabled {
  color?: NamedColor;
  transform?: 'capitalize' | 'uppercase' | 'lowercase',
  round?: boolean;
  disabled?: boolean;
  size?: number;
  opacity?: number;
  shadow?: ShadowProps;
  icon?: IconProps;
  scheme?: keyof ThemeNormalized['schemes']
}

const Button: FC<ButtonProps> = (props) => {
  props = {
    ...props
  };
  const { children, scheme, styles, disabled, opacity, transform, style } = props as BasePropsWithChildren<ButtonProps, ButtonStyles>

  const buttonStyle = [
    styles.default,
    transform && transform === 'capitalize' && styles.capitalize,
    transform && transform === 'lowercase' && styles.lowercase,
    transform && transform === 'uppercase' && styles.uppercase,
    scheme && styles[scheme] && styles[scheme],
    { zIndex: 10 },
    style && style
  ] as ViewStyle;

  const getContent = () => {
    const isString = children && typeof children === 'string';

  };

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={opacity} style={buttonStyle}>

    </TouchableOpacity>
  );
};

const styles = (theme: ThemeNormalized) => {
  type Schemes = Record<keyof typeof theme.schemes, NamedStyles>;
  const schemes = Object.keys(theme.schemes).reduce((a, c) => {
    a[c as keyof Schemes] = {
      backgroundColor: theme.schemes[c as keyof typeof theme.schemes]
    };
    return a;
  }, {} as Schemes);

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
  });
};

export default withPureact(Button, styles);