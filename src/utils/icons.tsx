
import {
  AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Fontisto, Foundation, Ionicons,  MaterialIcons, MaterialCommunityIcons, Octicons, SimpleLineIcons, Zocial
} from '@expo/vector-icons';

const ICON_MAP = {
  AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Fontisto, Foundation, Ionicons,  MaterialIcons, MaterialCommunityIcons, Octicons, SimpleLineIcons, Zocial
};

export type IconTypes = typeof ICON_MAP;
export type IconFamily = keyof IconTypes;
export type IconType<F extends IconFamily> = IconTypes[F];
export type IconNames<F extends IconFamily> = keyof IconType<F>;

export function getIcon<F extends IconFamily>(family: F) {
  return ICON_MAP[family] as IconType<F>;
}


