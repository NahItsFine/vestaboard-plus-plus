import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import SyncIcon from '@mui/icons-material/Sync';
import { Tabs, TabsType } from "../constants";
import { Dispatch, SetStateAction } from "react";

interface NavProps {
  currentTab: TabsType;
  setCurrentTab: Dispatch<SetStateAction<TabsType>>;
}

function Nav({ currentTab, setCurrentTab }: NavProps) {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={currentTab}
        onChange={(_, newValue) => {
          setCurrentTab(newValue);
        }}
      >
        <BottomNavigationAction label='Sync' value={Tabs.SYNC} icon={<SyncIcon />} />
        <BottomNavigationAction label='Async' value={Tabs.ASYNC} icon={<AccessTimeIcon />} />
        <BottomNavigationAction label='Settings' value={Tabs.SETTINGS} icon={<SettingsIcon />} />
      </BottomNavigation>
    </Paper>
  )
};

export default Nav;