import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import SyncIcon from '@mui/icons-material/Sync';

interface NavProps {
  currentTab: string;
  setCurrentTab: (newValue: string) => void;
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
        <BottomNavigationAction label='Sync' value='sync' icon={<SyncIcon />} />
        <BottomNavigationAction label='Async' value='async' icon={<AccessTimeIcon />} />
        <BottomNavigationAction label='Settings' value='settings' icon={<SettingsIcon />} />
      </BottomNavigation>
    </Paper>
  )
};

export default Nav;