"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIcon = void 0;
const vector_icons_1 = require("@expo/vector-icons");
const ICON_MAP = {
    AntDesign: vector_icons_1.AntDesign, Entypo: vector_icons_1.Entypo, EvilIcons: vector_icons_1.EvilIcons, Feather: vector_icons_1.Feather, FontAwesome: vector_icons_1.FontAwesome, Fontisto: vector_icons_1.Fontisto, Foundation: vector_icons_1.Foundation, Ionicons: vector_icons_1.Ionicons, MaterialIcons: vector_icons_1.MaterialIcons, MaterialCommunityIcons: vector_icons_1.MaterialCommunityIcons, Octicons: vector_icons_1.Octicons, SimpleLineIcons: vector_icons_1.SimpleLineIcons, Zocial: vector_icons_1.Zocial
};
function getIcon(family) {
    return ICON_MAP[family];
}
exports.getIcon = getIcon;
//# sourceMappingURL=icons.js.map