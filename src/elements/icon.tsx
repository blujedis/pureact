import React, { FC } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { withPureact } from '../withPureact';
import { getIcon, IconFamily } from '../utils/icons';
import { BaseProps, NamedColor, ThemeNormalized } from '../types';

export type IconStyles = ReturnType<typeof styles>;
export type IconStylesEnabled = Partial<Record<keyof IconStyles, boolean>>;

export interface IconProps extends ViewProps, IconStylesEnabled  {
  family: IconFamily;
  name: string;
  size?: number;
  color?: NamedColor;
}

const Icon: FC<IconProps> = (props) => {

  props = {
    ...props
  };

  const { style, family } = props as BaseProps<IconProps, IconStyles>;

  const Icon = getIcon(family);

  return (
    <></>
  );
};

const styles = (theme: ThemeNormalized) => StyleSheet.create({
});

export default withPureact(Icon, styles);