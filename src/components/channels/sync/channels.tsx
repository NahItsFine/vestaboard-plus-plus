import { SyncChannel, CHANNEL_TYPE_ENUM, CHANNEL_ID_ENUM } from "../constants";

export const SyncChannels: (SyncChannel)[] = [
  {
    id: CHANNEL_ID_ENUM.SYNC_PUSH_MESSAGE,
    name: 'Push Message',
    type: CHANNEL_TYPE_ENUM.SYNC_PUSH,
    icon: 'src\\assets\\message.png',
    getSubheader: () => 'Send a message to the Vestaboard',
  },
  {
    id: CHANNEL_ID_ENUM.SYNC_MODE_CLOCK,
    name: 'Clock (WIP)',
    type: CHANNEL_TYPE_ENUM.SYNC_MODE,
    icon: 'src\\assets\\clock.png',
    getSubheader: () => 'America/Toronto',
  },
  {
    id: CHANNEL_ID_ENUM.SYNC_MODE_SPOTIFY,
    name: 'Spotify (WIP)',
    type: CHANNEL_TYPE_ENUM.SYNC_MODE,
    icon: 'src\\assets\\spotify.png',
    getSubheader: () => "Show what's playing on Spotify",
  },
  {
    id: CHANNEL_ID_ENUM.SYNC_MODE_NBA,
    name: 'NBA Scoreboard (WIP)',
    type: CHANNEL_TYPE_ENUM.SYNC_MODE,
    icon: 'src\\assets\\nba.png',
    getSubheader: () => "Today's NBA games",
  },
];
