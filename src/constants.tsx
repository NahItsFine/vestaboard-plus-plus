export const Tabs = Object.freeze({
    SYNC: 'sync',
    ASYNC: 'async',
    SETTINGS: 'settings',
});
export type TabsType = typeof Tabs[keyof typeof Tabs];