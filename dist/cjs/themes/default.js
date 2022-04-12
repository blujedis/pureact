"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
const helpers_1 = require("../utils/helpers");
const config_1 = require("../config");
exports.defaultTheme = {
    light: (0, helpers_1.createTheme)(),
    dark: (0, helpers_1.createTheme)(true, {
        colors: {
            text: 'white',
            card: config_1.palette.carbon800,
            background: config_1.palette.carbon900,
            border: config_1.palette.carbon700,
            shadow: 'rgba(51,51,51,0.3)',
            muted: config_1.palette.carbon800
        }
    })
};
//# sourceMappingURL=default.js.map