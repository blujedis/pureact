import React, { FC } from 'react';
import { BasePropsWithChildren, Theme } from '../types';
import { StyleSheet, TextProps as TextPropsBase, Text as TextBase } from 'react-native';
import { withPureact } from '../withPureact';
import { createSchemes } from '../utils/helpers';

export type TextStyles = ReturnType<typeof styles>;
export type TextStylesEnabled = Partial<Record<keyof TextStyles, boolean>>;

export interface TextProps extends TextPropsBase, TextStylesEnabled {
  align?: 'left' | 'right' | 'center';
}

const Text: FC<TextProps> = (props) => {

  const {
    theme, styles, ...clean
  } = props as BasePropsWithChildren<TextProps, TextStyles>;

  const {
    children,
    ...rest
  } = clean;

  const style = [

  ] as TextPropsBase['style'][];

  return (
    <TextBase {...rest} style={style}>
      {children}
    </TextBase>
  )


};

const styles = (theme: Theme) => {
  const schemes = createSchemes(theme);
  return StyleSheet.create({

  });
};

export default withPureact(Text, styles);