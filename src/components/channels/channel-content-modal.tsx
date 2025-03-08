import { AppBar, Box, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { CHANNEL_ID_ENUM } from "./constants";
import useAppStore from "../../store";
import { isNull } from "lodash";
import ChannelContentPushMessage from "./sync/channel-content-push-message";

function ChannelContentModal() {
  const { openChannel, setOpenChannel } = useAppStore();

  const handleClose = () => {
    setOpenChannel(null);
  }

  if (isNull(openChannel)) {
    return <></>;
  }
  
  return (
    <Dialog
      open={true}
      onClose={() => handleClose()}
      fullWidth
      sx={{ height: 'auto' }}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => handleClose()}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {openChannel.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        {openChannel.id === CHANNEL_ID_ENUM.SYNC_PUSH_MESSAGE && <ChannelContentPushMessage />}
        {openChannel.id !== CHANNEL_ID_ENUM.SYNC_PUSH_MESSAGE && <>Content for channel ID: {openChannel.id}</>}
      </Box>
   </Dialog>
  )
};

export default ChannelContentModal;