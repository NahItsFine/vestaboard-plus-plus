export const TABS = Object.freeze({
    SYNC: 'sync',
    ASYNC: 'async',
    SETTINGS: 'settings',
});
export type TabsType = typeof TABS[keyof typeof TABS];
