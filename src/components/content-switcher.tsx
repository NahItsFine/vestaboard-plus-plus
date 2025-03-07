import { Box, Typography } from "@mui/material";
import { Tabs, TabsType } from "../constants";

interface ContentSwitcherProps {
  currentTab: TabsType;
}

function ContentSwitcher({ currentTab }: ContentSwitcherProps) {
  const getCurrentTab = (currentTab: TabsType) => {
    switch (currentTab) {
      case Tabs.SYNC:
        return (
          <Box>
            <Typography variant='h4'>Sync</Typography>
          </Box>
        );
      case Tabs.ASYNC:
        return (
          <Box>
            <Typography variant='h4'>Async</Typography>
          </Box>
        );
      case Tabs.SETTINGS:
        return (
          <Box>
            <Typography variant='h4'>Settings</Typography>
          </Box>
        );
      default:
        return (
          <Box>
            <Typography variant='h4'>Sync</Typography>
          </Box>
        );
    }
  }

  return getCurrentTab(currentTab);
};

export default ContentSwitcher;