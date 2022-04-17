"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.palette = exports.named = void 0;
const palette_1 = __importDefault(require("./palette"));
exports.palette = palette_1.default;
const named_1 = __importDefault(require("./named"));
exports.named = named_1.default;
const common_1 = require("./common");
const config = {
    dark: false,
    global: common_1.global,
    schemes: common_1.schemes,
    colors: common_1.colors,
    margin: common_1.margin,
    padding: common_1.padding,
    radius: common_1.radius,
    input: common_1.input,
    button: common_1.button,
    typography: common_1.typography,
    icon: common_1.icon,
    shadow: common_1.shadow
};
exports.config = config;
//# sourceMappingURL=index.js.map