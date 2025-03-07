import { SyncPushChannel, SyncModeChannel, CHANNEL_TYPE_ENUM, CHANNEL_ID_ENUM } from "../constants";

export const SyncChannels: (SyncPushChannel | SyncModeChannel)[] = [
  {
    id: CHANNEL_ID_ENUM.SYNC_PUSH_MESSAGE,
    name: '(WIP) Push Message',
    type: CHANNEL_TYPE_ENUM.SYNC_PUSH,
    icon: 'src\\assets\\message.png',
    getSubheader: () => 'Send a message to the Vestaboard',
    push: (message: string) => console.log(`PUSH MESSAGE: ${message}`),
  },
  {
    id: CHANNEL_ID_ENUM.SYNC_MODE_SPOTIFY,
    name: '(WIP) Spotify Mode',
    type: CHANNEL_TYPE_ENUM.SYNC_MODE,
    icon: 'src\\assets\\spotify.png',
    getSubheader: function () { return `[${this.isOn ? 'ON' : 'OFF'}] Show what's playing on Spotify`; },
    isOn: false,
    toggleOn: () => (isOn: boolean) => !isOn,
  },
];
