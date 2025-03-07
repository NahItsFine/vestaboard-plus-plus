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
