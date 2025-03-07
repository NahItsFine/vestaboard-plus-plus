import { Box, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import React from 'react';
import { isNull } from 'lodash';
import Nav from './components/nav';
import Header from './components/header';
import { TABS, TabsType } from './constants';
import ContentSwitcher from './components/content-switcher';
import useAppStore from './store';

function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const { openChannelId } = useAppStore();
  const [currentTab, setCurrentTab] = useState<TabsType>(TABS.SYNC);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [currentTab]);
  

  return (
    <Box className='roboto-condensed' ref={ref}>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <ContentSwitcher currentTab={currentTab} />
        <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {/* {!isNull(openChannelId) && <p>Open modal: {openChannelId}</p>} */}
      </ThemeProvider>
    </Box>
  )
}

export default App
