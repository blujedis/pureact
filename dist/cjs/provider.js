"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
const react_1 = __importStar(require("react"));
const helpers_1 = require("./utils/helpers");
const helpers_2 = require("./utils/helpers");
const themes_1 = require("./themes");
const ThemeContext = (0, react_1.createContext)({});
exports.ThemeContext = ThemeContext;
ThemeContext.displayName = 'PureactContext';
function ThemeProvider(props) {
    props = {
        theme: themes_1.defaultTheme.light,
        ...props
    };
    const { children, theme: initTheme } = props;
    const [activeTheme, setActiveTheme] = (0, react_1.useState)((0, helpers_2.normalizeTheme)(initTheme));
    const ctx = {
        current: activeTheme,
        mode: (activeTheme.dark ? 'dark' : 'light'),
        modify: (theme) => {
            const newTheme = (0, helpers_1.mergeObject)(activeTheme, theme);
            const normalized = (0, helpers_2.normalizeTheme)(newTheme);
            setActiveTheme(normalized);
            return normalized;
        },
        replace: (theme) => {
            const normalized = (0, helpers_2.normalizeTheme)(theme);
            setActiveTheme(normalized);
            return normalized;
        }
    };
    return (<ThemeContext.Provider value={ctx}>
      {children}
    </ThemeContext.Provider>);
}
exports.ThemeProvider = ThemeProvider;
const useTheme = () => {
    return (0, react_1.useContext)(ThemeContext);
};
exports.useTheme = useTheme;
//# sourceMappingURL=provider.js.map