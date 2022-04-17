"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const withPureact_1 = require("../withPureact");
const icons_1 = require("../utils/icons");
const Icon = (props) => {
    props = {
        ...props
    };
    const { family, name, size, color, theme, styles, ...rest } = props;
    const IconComponent = (0, icons_1.getIcon)(family);
    if (!name || !IconComponent)
        return null;
    const sizeAdj = typeof size === 'string' ? theme.icon.size[size] : size;
    const iconProps = {
        name,
        size: sizeAdj,
        color
    };
    return (<IconComponent {...iconProps} {...rest}/>);
};
const styles = (theme) => {
    return react_native_1.StyleSheet.create({});
};
exports.default = (0, withPureact_1.withPureact)(Icon, styles);
//# sourceMappingURL=icon.js.map