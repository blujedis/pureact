"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchemes = exports.toColor = exports.createColorMap = exports.createTheme = exports.mergeObject = exports.noop = void 0;
const config_1 = require("../config");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noop = (...args) => { return; };
exports.noop = noop;
/**
 * Merges source into target object with optional extend for merging other values.
 *
 * @param target the target to merge into.
 * @param source the source to merge from into target.
 */
const mergeObject = (target, source, allowUndefined = false) => {
    const result = { ...target };
    for (const k in source) {
        const val = source[k];
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (typeof result[k] !== 'undefined' && (Array.isArray(result[k]) || typeof result[k] !== 'object')) {
                throw new Error(`Invalid target type for source value: "${val}"`);
            }
            result[k] = (0, exports.mergeObject)(result[k] || {}, source[k]);
        }
        else if (allowUndefined && typeof source[k] === 'undefined' || typeof source[k] !== 'undefined') {
            result[k] = source[k];
        }
    }
    return result;
};
exports.mergeObject = mergeObject;
/**
 * Creates a theme, merging overrides while specifying mode type.
 *
 * @param isDark indicates the theme is a dark mode theme.
 * @param extend values to extend to base theme.
 * @param base the theme to extend, if not specified uses default.
 */
const createTheme = (isDark = false, extend = {}, base = config_1.config) => {
    return (0, exports.mergeObject)(base, { ...extend, dark: isDark });
};
exports.createTheme = createTheme;
/**
 * Merges palette colors, html named colors and theme colors into single object.
 *
 * @param theme optional theme to extract colors from.
 */
function createColorMap(theme) {
    return {
        ...config_1.palette,
        ...config_1.named,
        ...theme.colors
    };
}
exports.createColorMap = createColorMap;
/**
 * Converts named color to mapped value.
 *
 * @param color the named color to be converted.
 */
function toColor(color, theme) {
    // if (typeof color === 'object') {
    //   const result = {} as Record<string, string>;
    //   for (const k in color) {
    //     result[k] = toColor(color[k])
    //   }
    //   return result;
    // }
    theme = theme || {};
    const themeColors = {
        ...theme.colors,
        ...theme.schemes
    };
    return themeColors[color] || config_1.named[color] || config_1.palette[color] || color;
}
exports.toColor = toColor;
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
const createSchemes = (theme, key = ['backgroundColor']) => {
    return Object.keys(theme.schemes).reduce((a, c) => {
        const obj = {};
        key.forEach(k => {
            obj[k] = theme.schemes[c];
        });
        a[c] = obj;
        return a;
    }, {});
};
exports.createSchemes = createSchemes;
//# sourceMappingURL=helpers.js.map