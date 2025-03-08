/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { ChannelType } from './components/channels/constants';

type State = {
  openChannel: ChannelType | null;
  setOpenChannel: (channel: ChannelType | null) => void;
}

const store = (set: any) => ({
  openChannel: null,
  setOpenChannel: (channel: ChannelType | null) => set({ openChannel: channel }),
});

const useAppStore = create<State>(store);

export default useAppStore;