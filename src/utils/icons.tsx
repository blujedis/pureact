import {
  AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Fontisto, Foundation, Ionicons,  MaterialIcons, MaterialCommunityIcons, Octicons, SimpleLineIcons, Zocial
} from '@expo/vector-icons';
 import { OpaqueColorValue, TextProps } from 'react-native';

const ICON_MAP = {
  AntDesign, Entypo, EvilIcons, Feather, FontAwesome, Fontisto, Foundation, Ionicons,  MaterialIcons, MaterialCommunityIcons, Octicons, SimpleLineIcons, Zocial
};

export type IconFamily = keyof typeof ICON_MAP;
export type IconNames<F extends IconFamily> = keyof typeof ICON_MAP[F]['glyphMap'];
export interface IconProps<F extends IconFamily> extends TextProps {
  name: IconNames<F>;
  color: string | OpaqueColorValue;
  size: number;
}

export type IconComponent<F extends IconFamily> = (props: IconProps<F>) => JSX.Element;

export function getIcon<F extends keyof typeof ICON_MAP>(family: F) {
  return ICON_MAP[family] as unknown as IconComponent<F>;
}


