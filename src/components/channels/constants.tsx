// Types for channels
export const CHANNEL_TYPE_ENUM = Object.freeze({
  SYNC_PUSH: 'sync_push',
  SYNC_MODE: 'sync_mode',
  ASYNC: 'async',
  SETTINGS: 'settings',
});
export type ChannelTypeEnumType = typeof CHANNEL_TYPE_ENUM[keyof typeof CHANNEL_TYPE_ENUM];

export const CHANNEL_ID_ENUM = Object.freeze({
  SYNC_PUSH_MESSAGE: 'sync_push_message',
  SYNC_MODE_SPOTIFY: 'sync_mode_spotify',
  ASYNC_NEWS: 'async_news',
  SETTINGS_QUIET_HOURS: 'settings_quiet_hours',
});
export type ChannelIdEnumType = typeof CHANNEL_ID_ENUM[keyof typeof CHANNEL_ID_ENUM];

// Types for channel content
interface Channel {
  id: ChannelIdEnumType;
  name: string;
  type: ChannelTypeEnumType;
  icon: string;
  getSubheader(): string;
}

export interface SyncPushChannel extends Channel {
  type: typeof CHANNEL_TYPE_ENUM.SYNC_PUSH;
  push?(message: string): void;
}

export interface SyncModeChannel extends Channel {
  type: typeof CHANNEL_TYPE_ENUM.SYNC_MODE;
  isOn: boolean;
  toggleOn(): void;
}

export interface AsyncChannel extends Channel {
  type: typeof CHANNEL_TYPE_ENUM.ASYNC;
  isOn: boolean;
  toggleOn(): void;
  priority: number;
  setPriority(priority: number): void;
  recurrenceCron: string;
  setRecurrenceCron(cron: string): void;
}

export interface SettingsChannel extends Channel {
  type: typeof CHANNEL_TYPE_ENUM.SETTINGS;
  isOn: boolean;
  toggleOn(): void;
  settings: Record<string, unknown>;
  setSetting(key: string, value: unknown): void;
}

export type ChannelType = SyncPushChannel | SyncModeChannel | AsyncChannel | SettingsChannel;

// Character codes
interface CharacterMapping {
  key: string,
  label: string,
  code: number,
  note?: string
}

export const COLOUR_HEXES = {
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#00FF00',
  blue: '#0000FF',
  violet: '#7F00FF',
  white: '#FFFFFF',
  black: '#000000',
}

const CHARACTER_MAP: CharacterMapping[] = [
  {
    key: 'BLANK',
    label: '',
    code: 0,
    note: 'black on black Vestaboard, white on white Vestaboard'
  },
  {
    key: 'A',
    label: 'A',
    code: 1,
  },
  {
    key: 'B',
    label: 'B',
    code: 2,
  },
  {
    key: 'C',
    label: 'C',
    code: 3,
  },
  {
    key: 'D',
    label: 'D',
    code: 4,
  },
  {
    key: 'E',
    label: 'E',
    code: 5,
  },
  {
    key: 'F',
    label: 'F',
    code: 6,
  },
  {
    key: 'G',
    label: 'G',
    code: 7,
  },
  {
    key: 'H',
    label: 'H',
    code: 8,
  },
  {
    key: 'I',
    label: 'I',
    code: 9,
  },
  {
    key: 'J',
    label: 'J',
    code: 10,
  },
  {
    key: 'K',
    label: 'K',
    code: 11,
  },
  {
    key: 'L',
    label: 'L',
    code: 12,
  },
  {
    key: 'M',
    label: 'M',
    code: 13,
  },
  {
    key: 'N',
    label: 'N',
    code: 14,
  },
  {
    key: 'O',
    label: 'O',
    code: 15,
  },
  {
    key: 'P',
    label: 'P',
    code: 16,
  },
  {
    key: 'Q',
    label: 'Q',
    code: 17,
  },
  {
    key: 'R',
    label: 'R',
    code: 18,
  },
  {
    key: 'S',
    label: 'S',
    code: 19,
  },
  {
    key: 'T',
    label: 'T',
    code: 20,
  },
  {
    key: 'U',
    label: 'U',
    code: 21,
  },
  {
    key: 'V',
    label: 'V',
    code: 22,
  },
  {
    key: 'W',
    label: 'W',
    code: 23,
  },
  {
    key: 'X',
    label: 'X',
    code: 24,
  },
  {
    key: 'Y',
    label: 'Y',
    code: 25,
  },
  {
    key: 'Z',
    label: 'Z',
    code: 26,
  },
  {
    key: '1',
    label: '1',
    code: 27,
  },
  {
    key: '2',
    label: '2',
    code: 28,
  },
  {
    key: '3',
    label: '3',
    code: 29,
  },
  {
    key: '4',
    label: '4',
    code: 30,
  },
  {
    key: '5',
    label: '5',
    code: 31,
  },
  {
    key: '6',
    label: '6',
    code: 32,
  },
  {
    key: '7',
    label: '7',
    code: 33,
  },
  {
    key: '8',
    label: '8',
    code: 34,
  },
  {
    key: '9',
    label: '9',
    code: 35,
  },
  {
    key: '0',
    label: '0',
    code: 36,
  },
  {
    key: 'EXCLAMATION',
    label: '!',
    code: 37,
  },
  {
    key: 'AT',
    label: '@',
    code: 38,
  },
  {
    key: 'POUND',
    label: '#',
    code: 39,
  },
  {
    key: 'DOLLAR',
    label: '$',
    code: 40,
  },
  {
    key: 'LEFT_PARENTHESIS',
    label: '(',
    code: 41,
  },
  {
    key: 'RIGHT_PARENTHESIS',
    label: ')',
    code: 42,
  },
  {
    key: 'HYPHEN',
    label: '-',
    code: 44,
  },
  {
    key: 'PLUS',
    label: '+',
    code: 46,
  },
  {
    key: 'AMPERSAND',
    label: '&',
    code: 47,
  },
  {
    key: 'EQUAL',
    label: '=',
    code: 48,
  },
  {
    key: 'SEMICOLON',
    label: ';',
    code: 49,
  },
  {
    key: 'COLON',
    label: ':',
    code: 50,
  },
  {
    key: 'SINGLE_QUOTE',
    label: `'`,
    code: 52,
  },
  {
    key: 'DOUBLE_QUOTE',
    label: '"',
    code: 53,
  },
  {
    key: 'PERCENT',
    label: '%',
    code: 54,
  },
  {
    key: 'COMMA',
    label: ',',
    code: 55,
  },
  {
    key: 'PERIOD',
    label: '.',
    code: 56,
  },
  {
    key: 'SLASH',
    label: '/',
    code: 59,
  },
  {
    key: 'QUESTION',
    label: '?',
    code: 60,
  },
  {
    key: 'DEGREE',
    label: '°',
    code: 62,
  },
  {
    key: 'RED',
    label: COLOUR_HEXES.red,
    code: 63,
  },
  {
    key: 'ORANGE',
    label: COLOUR_HEXES.orange,
    code: 64,
  },
  {
    key: 'YELLOW',
    label: COLOUR_HEXES.yellow,
    code: 65,
  },
  {
    key: 'GREEN',
    label: COLOUR_HEXES.green,
    code: 66,
  },
  {
    key: 'BLUE',
    label: COLOUR_HEXES.blue,
    code: 67,
  },
  {
    key: 'VIOLET',
    label: COLOUR_HEXES.violet,
    code: 68,
  },
  {
    key: 'WHITE',
    label: COLOUR_HEXES.white,
    code: 69,
    note: 'For the local API this is black on a white Vestaboard',
  },
  {
    key: 'BLACK',
    label: COLOUR_HEXES.black,
    code: 70,
    note: 'For the local API this is white on a white Vestaboard',
  },
  // {
  //   key: 'FILLED',
  //   label: COLOUR_HEXES.black,
  //   code: 71,
  //   note: 'White on black Vestaboard / black on white Vestaboard, not available for the local API',
  // },
];

export const CHARACTER_MAP_CODE_TO_KEY_LABEL = CHARACTER_MAP.reduce((accum, value) => ({
  ...accum,
  [value.code]: {
    key: value.key,
    label: value.label,
  }
}), {});

export const CHARACTER_MAP_LABEL_TO_CODE = CHARACTER_MAP.reduce((accum, value) => ({
  ...accum,
  [value.label]: value.code
}), {});