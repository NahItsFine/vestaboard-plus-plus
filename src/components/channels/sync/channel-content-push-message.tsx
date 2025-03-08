import { Box, Divider, IconButton, Snackbar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { isNull } from "lodash";
import useAppStore from "../../../store";
import { useState } from "react";
import MessageArray from "../../message-array/message-array";

function ChannelContentPushMessage() {
  const { openChannel, setOpenChannel } = useAppStore();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const sendMessage = () => {
    setIsSnackbarOpen(true);
  }

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
    setOpenChannel(null);
  }

  if (isNull(openChannel)) {
    return <></>;
  }
  
  return (
    <>
      <MessageArray />

      <Divider sx={{ mt: 3, mb: 1 }} />

      <Box display="flex" justifyContent="flex-end">
        <IconButton aria-label="send" onClick={() => sendMessage()}>
          <SendIcon />
        </IconButton>
      </Box>
      
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => closeSnackbar()}
        message='Message pushed'
      />
    </>
  );
};

export default ChannelContentPushMessage;
