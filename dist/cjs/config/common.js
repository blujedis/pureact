"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadow = exports.button = exports.input = exports.icon = exports.radius = exports.padding = exports.margin = exports.typography = exports.colors = exports.schemes = exports.global = void 0;
const palette_1 = __importDefault(require("./palette"));
const base = 16;
exports.global = {
    base,
    elevation: 1
};
// will be merged with colors below.
exports.schemes = {
    default: palette_1.default.slate200,
    primary: palette_1.default.indigo600,
    secondary: palette_1.default.carbon600,
    danger: palette_1.default.rose600,
    warning: palette_1.default.yellow600,
    info: palette_1.default.sky600,
    success: palette_1.default.emerald600,
    transparent: palette_1.default.transparent
};
exports.colors = {
    text: palette_1.default.slate700,
    muted: palette_1.default.slate100,
    card: palette_1.default.slate100,
    notification: palette_1.default.rose600,
    background: palette_1.default.slate50,
    border: palette_1.default.slate200,
};
exports.typography = {
    color: exports.colors.text,
    xs: base * 0.65,
    sm: base * 0.75,
    body: base * 0.875,
    md: base * 0.875,
    lg: base,
    xl: base * 1.25,
    x2l: base * 1.5,
    x3l: base * 1.75,
    h1: base * 2.75,
    h2: base * 2.375,
    h3: base * 1.875,
    h4: base * 1.5,
    h5: base * 1.3125,
    h6: base * 1.125,
};
exports.margin = {
    none: 0,
    xs: base * .25,
    sm: base * .5,
    md: base * .75,
    lg: base,
    xl: base * 1.25,
    x2l: base * 1.5,
    x3l: base * 1.75
};
exports.padding = {
    ...exports.margin
};
exports.radius = {
    none: 0,
    xs: base * .125,
    sm: base * .25,
    md: base * .35,
    lg: base * .5,
    xl: base * .75,
    x2l: base,
    x3l: base * 1.25
};
exports.icon = {
    size: {
        xs: base * .5,
        sm: base * .75,
        md: base,
        lg: base * 1.5,
        xl: base * 1.75,
        x2l: base * 2,
        x3l: base * 2.25
    }
};
exports.input = {
    size: {
        md: {
            height: base * 3
        }
    }
};
exports.button = {
    size: {
        md: {
            height: exports.input.size.md.height,
            width: exports.input.size.md.height * 1.6
        }
    }
};
exports.shadow = {
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowColor: 'rgba(0,0,0, 0.3)',
};
//# sourceMappingURL=common.js.map