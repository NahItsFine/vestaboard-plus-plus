/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { ChannelIdEnumType } from './components/channels/constants';

type State = {
  openChannelId: ChannelIdEnumType | null;
  setOpenChannelId: (channelId: ChannelIdEnumType | null) => void;
}

const store = (set: any) => ({
  openChannelId: null,
  setOpenChannelId: (channelId: ChannelIdEnumType | null) => set({ openChannelId: channelId }),
});

const useAppStore = create<State>(store);

export default useAppStore;