"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const withPureact_1 = require("../withPureact");
const Block = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { theme, styles, ...clean } = props;
    const { children, style: initStyle, column, row, fluid, middle, center, space, left, right, top, bottom, flex, height, width, shadowColor, card, shadow, safe, ...rest } = clean;
    const style = [
        column && styles.column,
        row && styles.row,
        flex && { flex: flex > 0 ? flex : 1 },
        center && styles.center,
        middle && styles.middle,
        top && styles.top,
        bottom && styles.bottom,
        right && styles.right,
        left && styles.left,
        space && { justifyContent: `space-${space}` },
        shadow && styles.shadow,
        fluid && styles.fluid,
        card && styles.card,
        height && { height },
        width && { width },
        shadowColor && { shadowColor },
        initStyle
    ];
    if (!safe)
        return (<react_native_1.View style={style} {...rest}>
        {children}
      </react_native_1.View>);
    return (<react_native_1.SafeAreaView style={style} {...rest}>
      {children}
    </react_native_1.SafeAreaView>);
};
const styles = (theme) => react_native_1.StyleSheet.create({
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
    },
    fluid: {
        width: 'auto',
    },
    middle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    left: {
        alignItems: 'flex-start',
    },
    right: {
        alignItems: 'flex-end',
    },
    top: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    bottom: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    card: {
        borderRadius: theme.radius.md,
        borderWidth: 1,
        borderColor: theme.colors.border
    },
    shadow: {
        ...theme.shadow,
        elevation: theme.global.elevation
    },
});
exports.default = (0, withPureact_1.withPureact)(Block, styles);
//# sourceMappingURL=block.js.map