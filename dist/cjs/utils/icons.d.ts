import * as ExpoIcons from '@expo/vector-icons';
declare type ExpoKeys = keyof typeof ExpoIcons;
export declare type IconFamily = Exclude<ExpoKeys, 'createMultiStyleIconSet' | 'createIconSet' | 'createIconSetFromFontello' | 'createIconSetFromIcoMoon' | 'createMu'>;
export declare function getIcon<F extends IconFamily>(family: F): typeof ExpoIcons[F];
export {};
