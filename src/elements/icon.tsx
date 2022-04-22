import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { withPureact } from '../withPureact';
import { getIcon, IconFamily, IconNames } from '../utils/icons';
import { BaseProps, DefinedColor, ThemeColor, Theme } from '../types';

export type IconStyles = ReturnType<typeof styles>;
export type IconStylesEnabled = Partial<Record<keyof IconStyles, boolean>>;

export interface IconProps<F extends IconFamily = IconFamily> extends IconStylesEnabled {
  family: F;
  name: IconNames<F>;
  size?: keyof Theme['icon']['size'] | number;
  color?: DefinedColor | ThemeColor;
}

const Icon: FC<IconProps> = (props) => {

  props = {
    ...props
  };

  const { family, name, size, color, theme, styles, ...rest } = props as BaseProps<IconProps, IconStyles>;

  const IconComponent = getIcon(family);

  if (!name || !IconComponent)
    return null;

  const sizeAdj = typeof size === 'string' ? theme.icon.size[size] : size;

  const iconProps = {
    name,
    size: sizeAdj,
    color: color || theme.colors.muted,
  };

  return (
    <IconComponent {...iconProps} {...rest} />
  );

};

const styles = (theme: Theme) => {
  return StyleSheet.create({
  });
}

export default withPureact(Icon, styles);