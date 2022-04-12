import React, { forwardRef, FC } from 'react';
import { ThemeContext } from './provider';
import { defaultTheme } from './themes';
import { noop } from './utils/helpers';
import { StylesFn } from './types';

export const withPureact = <P extends Record<string, any>, S extends StylesFn = StylesFn>(
  ComponentRef: FC<P>, stylesFn?: S) => {
  const Component = forwardRef<typeof ComponentRef, P>((props, ref) => {
    <ThemeContext.Consumer>
      {(ctx) => {
        const theme = { ...defaultTheme.light, ...ctx.current };
        const styles = (stylesFn || noop)(theme);
        return (
          <ComponentRef
            ref={ref}
            {...props}
            theme={theme}
            styles={styles}
          />
        );
      }}
    </ThemeContext.Consumer>
    return <ComponentRef {...props} />;
  });
  Component.displayName = ComponentRef.name;
  return Component;
};

