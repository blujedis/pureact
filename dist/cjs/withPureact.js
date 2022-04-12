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
exports.withPureact = void 0;
const react_1 = __importStar(require("react"));
const provider_1 = require("./provider");
const themes_1 = require("./themes");
const helpers_1 = require("./utils/helpers");
const withPureact = (ComponentRef, stylesFn) => {
    const Component = (0, react_1.forwardRef)((props, ref) => {
        <provider_1.ThemeContext.Consumer>
      {(ctx) => {
                const theme = { ...themes_1.defaultTheme.light, ...ctx.current };
                const styles = (stylesFn || helpers_1.noop)(theme);
                return (<ComponentRef ref={ref} {...props} theme={theme} styles={styles}/>);
            }}
    </provider_1.ThemeContext.Consumer>;
        return <ComponentRef {...props}/>;
    });
    Component.displayName = ComponentRef.name;
    return Component;
};
exports.withPureact = withPureact;
//# sourceMappingURL=withPureact.js.map