import { Box, Typography } from "@mui/material";
import { TABS, TabsType } from "../constants";
import { SyncChannels } from "./channels/sync/channels";
import Channel from "./channels/channel";
import { AsyncChannels } from "./channels/async/channels";
import { SettingsChannels } from "./channels/settings/channels";

interface ContentSwitcherProps {
  currentTab: TabsType;
}

function ContentSwitcher({ currentTab }: ContentSwitcherProps) {
  const getCurrentTabChannels = (currentTab: TabsType) => {
    switch (currentTab) {
      case TABS.SYNC:
        return SyncChannels.map((channel, i) => {
          return <Channel channel={channel} key={i} />;
        });
      case TABS.ASYNC:
        return AsyncChannels.map((channel, i) => {
          return <Channel channel={channel} key={i} />;
        });
      case TABS.SETTINGS:
        return SettingsChannels.map((channel, i) => {
          return <Channel channel={channel} key={i} />;
        });
      default:
        return (
          <Box>
            <Typography variant='h4'>???</Typography>
          </Box>
        );
    }
  }

  return getCurrentTabChannels(currentTab);
};

export default ContentSwitcher;