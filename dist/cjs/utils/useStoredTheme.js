"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStoredTheme = void 0;
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
const react_native_1 = require("react-native");
const useStoredTheme = (key = 'theme') => {
    const defaultConfig = {
        name: 'default',
        mode: 'light',
        deviceMode: 'light'
    };
    /**
     * Gets the stored theme config or returns default values.
     *
     * @param config an optional config to use if none is yet stored.
     */
    const getStoredTheme = async (config) => {
        const storedConfig = await async_storage_1.default.getItem(key);
        const def = {
            ...defaultConfig,
            ...config
        };
        def.deviceMode = (def.deviceMode || (0, react_native_1.useColorScheme)());
        try {
            return {
                ...def,
                ...JSON.parse(storedConfig || '{}')
            };
        }
        catch (ex) {
            console.error(ex);
            return def;
        }
    };
    /**
     * Sets storage with the specified configuration.
     *
     * @param config the configuration to be persisted to storage.
     */
    const setStoredTheme = async (config) => {
        const storedConfig = {
            ...defaultConfig,
            ...config,
        };
        storedConfig.deviceMode = (storedConfig.deviceMode || (0, react_native_1.useColorScheme)());
        try {
            await async_storage_1.default.setItem(key, JSON.stringify(storedConfig));
            return true;
        }
        catch (ex) {
            console.error(ex);
            return false;
        }
    };
    /**
     * Ensures storage contains a theme configuration object.
     *
     * @param config optional config to initialize with.
     */
    const initStoredTheme = async (config) => {
        const storedTheme = await getStoredTheme(config);
        setStoredTheme(storedTheme);
        return storedTheme;
    };
    return {
        default: defaultConfig,
        get: getStoredTheme,
        set: setStoredTheme,
        init: initStoredTheme
    };
};
exports.useStoredTheme = useStoredTheme;
//# sourceMappingURL=useStoredTheme.js.map