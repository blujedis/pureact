"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const withPureact_1 = require("../withPureact");
const Button = (props) => {
    props = {
        ...props
    };
    const { children, scheme, styles, disabled, opacity, transform, style } = props;
    const buttonStyle = [
        styles.default,
        transform && transform === 'capitalize' && styles.capitalize,
        transform && transform === 'lowercase' && styles.lowercase,
        transform && transform === 'uppercase' && styles.uppercase,
        scheme && styles[scheme] && styles[scheme],
        { zIndex: 10 },
        style && style
    ];
    const getContent = () => {
        const isString = children && typeof children === 'string';
    };
    return (<react_native_1.TouchableOpacity disabled={disabled} activeOpacity={opacity} style={buttonStyle}>

    </react_native_1.TouchableOpacity>);
};
const styles = (theme) => {
    const schemes = Object.keys(theme.schemes).reduce((a, c) => {
        a[c] = {
            backgroundColor: theme.schemes[c]
        };
        return a;
    }, {});
    return react_native_1.StyleSheet.create({
        ...schemes,
        default: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            ...theme.button.size.md
        },
        capitalize: {
            textTransform: 'capitalize'
        },
        lowercase: {
            textTransform: 'lowercase'
        },
        uppercase: {
            textTransform: 'uppercase'
        },
    });
};
exports.default = (0, withPureact_1.withPureact)(Button, styles);
//# sourceMappingURL=button.js.map