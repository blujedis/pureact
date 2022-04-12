import { ThemeMode } from '../types';
export interface IStoredTheme {
    name: string;
    mode: ThemeMode;
    deviceMode: ThemeMode;
}
export declare const useStoredTheme: (key?: string) => {
    default: Required<IStoredTheme>;
    get: (config?: IStoredTheme | undefined) => Promise<Required<IStoredTheme>>;
    set: (config: IStoredTheme) => Promise<boolean>;
    init: (config?: IStoredTheme | undefined) => Promise<Required<IStoredTheme>>;
};
