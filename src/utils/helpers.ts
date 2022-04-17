import { config, palette, named } from '../config';
import { Theme, DefinedColor, ThemeColor, NamedStyles } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noop = (...args: unknown[]) => { return; };

/**
 * Merges source into target object with optional extend for merging other values.
 * 
 * @param target the target to merge into.
 * @param source the source to merge from into target.
 */
export const mergeObject = <T extends Record<string, any>, S extends Record<string, any>>(target: T, source: S, allowUndefined = false) => {
  const result = { ...target };
  for (const k in source as S & T) {
    const val = source[k];
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      if (typeof result[k] !== 'undefined' && (Array.isArray(result[k]) || typeof result[k] !== 'object')) {
        throw new Error(`Invalid target type for source value: "${val}"`);
      }
      result[k as keyof typeof result] = mergeObject(result[k] || {}, source[k]);
    }
    else if (allowUndefined && typeof source[k] === 'undefined' || typeof source[k] !== 'undefined') {
      result[k as keyof typeof result] = source[k];
    }
  }
  return result as T & S;
}

/**
 * Creates a theme, merging overrides while specifying mode type.
 * 
 * @param isDark indicates the theme is a dark mode theme.
 * @param extend values to extend to base theme.
 * @param base the theme to extend, if not specified uses default.
 */
export const createTheme = <C extends Record<string, any>, B extends Record<string, any> = typeof config>(isDark = false, extend = {} as C, base = config as unknown as B) => {
  return mergeObject(base, { ...extend, dark: isDark });
};

/**
 * Merges palette colors, html named colors and theme colors into single object.
 * 
 * @param theme optional theme to extract colors from.
 */
export function createColorMap<T extends Theme>(theme: T) {
  return {
    ...palette,
    ...named,
    ...theme.colors
  };
}


/**
 * Converts named color to mapped value.
 * 
 * @param color the named color to be converted.
 */
export function toColor(color: DefinedColor, theme?: Theme) {
  // if (typeof color === 'object') {
  //   const result = {} as Record<string, string>;
  //   for (const k in color) {
  //     result[k] = toColor(color[k])
  //   }
  //   return result;
  // }
  theme = theme || {} as Theme;
  const themeColors = {
    ...theme.colors,
    ...theme.schemes
  };
  return themeColors[color as keyof typeof themeColors] || named[color as keyof typeof named] || palette[color as keyof typeof palette] || color;
}

/**
 * Normalizes theme converting values as needed or ensuring defaults.
 * 
 * @param theme the theme to be normalized.
 */
// export const normalizeTheme = <T extends Theme>(theme: T) => {
//   const { colors: currentColors, schemes: currentSchemes, ...rest } = theme;
//   const schemes = toColor(currentSchemes);
//   const colors = { ...toColor(currentColors), ...schemes };
//   // Be sure to presrve original schemes in new object.
//   return {
//     schemes,
//     colors,
//     ...rest
//   };
// };

/**
 * Creates map of color schemes. 
 * 
 * @param theme the active theme.
 * @param key the key for creating the scheme.
 */
export const createSchemes = <T extends Theme, K extends 'color' | 'backgroundColor' | 'borderColor'>(theme: T, key = ['backgroundColor'] as K[]) => {
  type Schemes = Record<keyof typeof theme.schemes, NamedStyles>;
  return Object.keys(theme.schemes).reduce((a, c) => {
    const obj = {} as Record<K, string>;
    key.forEach(k => {
      obj[k] =  theme.schemes[c as keyof typeof theme.schemes];
    });
    a[c as keyof Schemes] = obj;
    return a;
  }, {} as Schemes);
}
