import React, { FC } from 'react';
import { StylesFn } from './types';
export declare const withPureact: <P extends Record<string, any>, S extends StylesFn = StylesFn>(ComponentRef: React.FC<P>, stylesFn?: S | undefined) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<React.FC<P>>>;
