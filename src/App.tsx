import { Box, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import React from 'react';
import Nav from './components/nav';
import Header from './components/header';
import { Tabs, TabsType } from './constants';
import ContentSwitcher from './components/content-switcher';

function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [currentTab, setCurrentTab] = useState<TabsType>(Tabs.SYNC);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [currentTab]);

  return (
    <Box className='roboto-condensed' ref={ref}>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <ContentSwitcher currentTab={currentTab} />
        <Nav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </ThemeProvider>
    </Box>
  )
}

export default App
