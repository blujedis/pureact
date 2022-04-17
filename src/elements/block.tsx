import React, { FC } from 'react';
import { BasePropsWithChildren, Theme } from '../types';
import { View, StyleSheet, ViewProps, SafeAreaView } from 'react-native';
import { withPureact } from '../withPureact';

export type BlockStyles = ReturnType<typeof styles>;
export type BlockStylesEnabled = Partial<Record<keyof BlockStyles, boolean>>;

export interface BlockProps extends ViewProps, BlockStylesEnabled {
  flex?: boolean | number;
  height?: number;
  width?: number;
  shadowColor?: string;
  space?: number;
  safe?: boolean;
}

const Block: FC<BlockProps> = (props) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    theme, styles, ...clean
  } = props as BasePropsWithChildren<BlockProps, BlockStyles>;

  const {
    children, style: initStyle,
    column, row, fluid, middle, center, space,
    left, right, top, bottom, flex, height, width,
    shadowColor, card, shadow, safe, ...rest
  } = clean;

  const style = [
    column && styles.column,
    row && styles.row,
    flex && { flex: flex > 0 ? flex : 1 },
    center && styles.center,
    middle && styles.middle,
    top && styles.top,
    bottom && styles.bottom,
    right && styles.right,
    left && styles.left,
    space && { justifyContent: `space-${space}` },
    shadow && styles.shadow,
    fluid && styles.fluid,
    card && styles.card,
    height && { height },
    width && { width },
    shadowColor && { shadowColor },
    initStyle
  ] as ViewProps['style'][];

  if (!safe)
    return (
      <View style={style} {...rest} >
        {children}
      </View>
    );

  return (
    <SafeAreaView style={style} {...rest} >
      {children}
    </SafeAreaView>
  );

};

const styles = (theme: Theme) => StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  fluid: {
    width: 'auto',
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  bottom: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  card: {
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border
  },
  shadow: {
    ...theme.shadow,
    elevation: theme.global.elevation
  },
});

export default withPureact(Block, styles);