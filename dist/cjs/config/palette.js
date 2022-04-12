"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palette = {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    slate: '#64748b',
    slate50: '#fafafc',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate300: '#cbd5e1',
    slate400: '#94a3b8',
    slate500: '#64748b',
    slate600: '#475569',
    slate700: '#334155',
    slate800: '#1e293b',
    slate900: '#0f172a',
    gray: '#607d8b',
    gray50: '#eceff1',
    gray100: '#cfd8dc',
    gray200: '#b0bec5',
    gray300: '#90a4ae',
    gray400: '#78909c',
    gray500: '#607d8b',
    gray600: '#546e7a',
    gray700: '#455a64',
    gray800: '#37474f',
    gray900: '#263238',
    zinc: '#71717a',
    zinc50: '#fafafa',
    zinc100: '#f4f4f5',
    zinc200: '#e4e4e7',
    zinc300: '#d4d4d8',
    zinc400: '#a1a1aa',
    zinc500: '#71717a',
    zinc600: '#52525b',
    zinc700: '#3f3f46',
    zinc800: '#27272a',
    zinc900: '#18181b',
    neutral: '#9e9e9e',
    neutral50: '#fafafa',
    neutral100: '#f5f5f5',
    neutral200: '#eeeeee',
    neutral300: '#e0e0e0',
    neutral400: '#bdbdbd',
    neutral500: '#9e9e9e',
    neutral600: '#757575',
    neutral700: '#616161',
    neutral800: '#424242',
    neutral900: '#212121',
    stone: '#78716c',
    stone50: '#fafaf9',
    stone100: '#f5f5f4',
    stone200: '#e7e5e4',
    stone300: '#d6d3d1',
    stone400: '#a8a29e',
    stone500: '#78716c',
    stone600: '#57534e',
    stone700: '#44403c',
    stone800: '#292524',
    stone900: '#1c1917',
    red: '#ef4444',
    red50: '#fef2f2',
    red100: '#fee2e2',
    red200: '#fecaca',
    red300: '#fca5a5',
    red400: '#f87171',
    red500: '#ef4444',
    red600: '#dc2626',
    red700: '#b91c1c',
    red800: '#991b1b',
    red900: '#7f1d1d',
    orange: '#f97316',
    orange50: '#fff7ed',
    orange100: '#ffedd5',
    orange200: '#fed7aa',
    orange300: '#fdba74',
    orange400: '#fb923c',
    orange500: '#f97316',
    orange600: '#d97706',
    orange700: '#b45309',
    orange800: '#92400e',
    orange900: '#78350f',
    amber: '#f59e0b',
    amber50: '#fffbeb',
    amber100: '#fef3c7',
    amber200: '#fde68a',
    amber300: '#fcd34d',
    amber400: '#fbbf24',
    amber500: '#f59e0b',
    amber600: '#d97706',
    amber700: '#b45309',
    amber800: '#92400e',
    amber900: '#78350f',
    yellow: '#eab308',
    yellow50: '#fefce8',
    yellow100: '#fef9c3',
    yellow200: '#fef08a',
    yellow300: '#fde047',
    yellow400: '#facc15',
    yellow500: '#eab308',
    yellow600: '#ca8a04',
    yellow700: '#a16207',
    yellow800: '#854d0e',
    yellow900: '#713f12',
    lime: '#84cc16',
    lime50: '#f7fee7',
    lime100: '#ecfccb',
    lime200: '#d9f99d',
    lime300: '#bef264',
    lime400: '#a3e635',
    lime500: '#84cc16',
    lime600: '#65a30d',
    lime700: '#4d7c0f',
    lime800: '#3f6212',
    lime900: '#365314',
    green: '#4caf50',
    green50: '#f0fdf4',
    green100: '#dcfce7',
    green200: '#bbf7d0',
    green300: '#86efac',
    green400: '#4ade80',
    green500: '#22c55e',
    green600: '#16a34a',
    green700: '#15803d',
    green800: '#166534',
    green900: '#14532d',
    emerald: '#10b981',
    emerald50: '#ecfdf5',
    emerald100: '#d1fae5',
    emerald200: '#a7f3d0',
    emerald300: '#6ee7b7',
    emerald400: '#34d399',
    emerald500: '#10b981',
    emerald600: '#059669',
    emerald700: '#047857',
    emerald800: '#065f46',
    emerald900: '#064e3b',
    teal: '#14b8a6',
    teal50: '#f0fdfa',
    teal100: '#ccfbf1',
    teal200: '#99f6e4',
    teal300: '#5eead4',
    teal400: '#2dd4bf',
    teal500: '#14b8a6',
    teal600: '#0d9488',
    teal700: '#0f766e',
    teal800: '#115e59',
    teal900: '#134e4a',
    cyan: '#06b6d4',
    cyan50: '#ecfeff',
    cyan100: '#cffafe',
    cyan200: '#a5f3fc',
    cyan300: '#67e8f9',
    cyan400: '#22d3ee',
    cyan500: '#06b6d4',
    cyan600: '#0891b2',
    cyan700: '#0e7490',
    cyan800: '#155e75',
    cyan900: '#164e63',
    sky: '#0ea5e9',
    sky50: '#f0f9ff',
    sky100: '#e0f2fe',
    sky200: '#bae6fd',
    sky300: '#7dd3fc',
    sky400: '#38bdf8',
    sky500: '#0ea5e9',
    sky600: '#0284c7',
    sky700: '#0369a1',
    sky800: '#075985',
    sky900: '#0c4a6e',
    blue: '#3b82f6',
    blue50: '#eff6ff',
    blue100: '#dbeafe',
    blue200: '#bfdbfe',
    blue300: '#93c5fd',
    blue400: '#60a5fa',
    blue500: '#3b82f6',
    blue600: '#2563eb',
    blue700: '#1d4ed8',
    blue800: '#1e40af',
    blue900: '#1e3a8a',
    indigo: '#6366f1',
    indigo50: '#eef2ff',
    indigo100: '#e0e7ff',
    indigo200: '#c7d2fe',
    indigo300: '#a5b4fc',
    indigo400: '#818cf8',
    indigo500: '#6366f1',
    indigo600: '#4f46e5',
    indigo700: '#4338ca',
    indigo800: '#3730a3',
    indigo900: '#312e81',
    violet: '#8b5cf6',
    violet50: '#f5f3ff',
    violet100: '#ede9fe',
    violet200: '#ddd6fe',
    violet300: '#c4b5fd',
    violet400: '#a78bfa',
    violet500: '#8b5cf6',
    violet600: '#7c3aed',
    violet700: '#6d28d9',
    violet800: '#5b21b6',
    violet900: '#4c1d95',
    purple: '#a855f7',
    purple50: '#faf5ff',
    purple100: '#f3e8ff',
    purple200: '#e9d5ff',
    purple300: '#d8b4fe',
    purple400: '#c084fc',
    purple500: '#a855f7',
    purple600: '#9333ea',
    purple700: '#7e22ce',
    purple800: '#6b21a8',
    purple900: '#581c87',
    fuschia: '#d946ef',
    fuschia50: '#fdf4ff',
    fuschia100: '#fae8ff',
    fuschia200: '#f5d0fe',
    fuschia300: '#f0abfc',
    fuschia400: '#e879f9',
    fuschia500: '#d946ef',
    fuschia600: '#c026d3',
    fuschia700: '#a21caf',
    fuschia800: '#86198f',
    fuschia900: '#701a75',
    pink: '#e91e63',
    pink50: '#fdf2f8',
    pink100: '#fce7f3',
    pink200: '#fbcfe8',
    pink300: '#f9a8d4',
    pink400: '#f472b6',
    pink500: '#ec4899',
    pink600: '#db2777',
    pink700: '#be185d',
    pink800: '#9d174d',
    pink900: '#831843',
    rose: '#f43f5e',
    rose50: '#fff1f2',
    rose100: '#ffe4e6',
    rose200: '#fecdd3',
    rose300: '#fda4af',
    rose400: '#fb7185',
    rose500: '#f43f5e',
    rose600: '#e11d48',
    rose700: '#be123c',
    rose800: '#9f1239',
    rose900: '#881337',
    brown: '#795548',
    brown50: '#efebe9',
    brown100: '#d7ccc8',
    brown200: '#bcaaa4',
    brown300: '#a1887f',
    brown400: '#8d6e63',
    brown500: '#795548',
    brown600: '#6d4c41',
    brown700: '#5d4037',
    brown800: '#4e342e',
    brown900: '#3e2723',
    carbon: '#696482',
    carbon50: '#f1f1f2',
    carbon100: '#d5d4de',
    carbon200: '#bab7c8',
    carbon300: '#9e9ab1',
    carbon400: '#827d9b',
    carbon500: '#696482',
    carbon600: '#514e65',
    carbon700: '#3a3748',
    carbon800: '#201f28',
    carbon900: '#131218',
};
exports.default = palette;
//# sourceMappingURL=palette.js.map