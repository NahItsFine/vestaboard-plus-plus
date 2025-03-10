export const TABS = Object.freeze({
    SYNC: 'sync',
    ASYNC: 'async',
    SETTINGS: 'settings',
});
export type TabsType = typeof TABS[keyof typeof TABS];

export const NUM_ROWS = 6;
export const NUM_COLS = 22;