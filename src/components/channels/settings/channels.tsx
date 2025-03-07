import { CHANNEL_ID_ENUM, CHANNEL_TYPE_ENUM, SettingsChannel } from "../constants";

export const SettingsChannels: (SettingsChannel)[] = [
  {
    id: CHANNEL_ID_ENUM.SETTINGS_QUIET_HOURS,
    name: 'Quiet Hours (WIP)',
    type: CHANNEL_TYPE_ENUM.SETTINGS,
    icon: 'src\\assets\\quiet.png',
    getSubheader: function () { return `[${this.isOn ? 'ON' : 'OFF'}] Set quiet hours`; },
    isOn: false,
    toggleOn: function (): void {
      this.isOn = !this.isOn;
    },
    settings: {},
    setSetting: function (): void {
      throw new Error("Function not implemented.");
    }
  },
];
