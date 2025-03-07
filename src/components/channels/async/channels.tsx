import { CHANNEL_TYPE_ENUM, AsyncChannel, CHANNEL_ID_ENUM } from "../constants";

export const AsyncChannels: (AsyncChannel)[] = [
  {
    id: CHANNEL_ID_ENUM.ASYNC_NEWS,
    name: '(WIP) Headlines',
    type: CHANNEL_TYPE_ENUM.ASYNC,
    icon: 'src\\assets\\news.png',
    getSubheader: function () { return `[${this.isOn ? 'ON' : 'OFF'}] Show the latest headlines`; },
    isOn: false,
    toggleOn: function (): void {
      this.isOn = !this.isOn;
    },
    recurrenceCron: '',
    setRecurrenceCron: function (cron: string): void {
      this.recurrenceCron = cron;
    },
    priority: 0,
    setPriority: function (priority: number): void {
      this.priority = priority;
    }
  },
];
