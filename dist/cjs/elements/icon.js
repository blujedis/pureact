"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const withPureact_1 = require("../withPureact");
const Icon = (props) => {
    props = {
        ...props
    };
    const { style } = props;
    return (<></>);
};
const styles = (theme) => react_native_1.StyleSheet.create({});
exports.default = (0, withPureact_1.withPureact)(Icon, styles);
//# sourceMappingURL=icon.js.map