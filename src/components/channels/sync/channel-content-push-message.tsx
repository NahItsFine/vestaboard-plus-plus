import { Box, Divider, Button, IconButton, Snackbar, Stack } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CircleIcon from '@mui/icons-material/Circle';
import AbcIcon from '@mui/icons-material/Abc';
import CancelIcon from '@mui/icons-material/Cancel';
import { isNull } from "lodash";
import useAppStore from "../../../store";
import { useState } from "react";
import CharArray from "../../message-array/char-array";
import { Delete } from "@mui/icons-material";

function ChannelContentPushMessage() {
  const { openChannel } = useAppStore();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [charArray, setCharArray] = useState<string[][]>([]);

  const sendMessage = () => {
    setIsSnackbarOpen(true);
    console.log('sendMessage: ', JSON.stringify(charArray));
  }

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  }

  const handleOutputArray = (output: string[][]) => {
    setCharArray(output);
  }

  if (isNull(openChannel)) {
    return <></>;
  }

  // clear button
  // on click: if state = if color mode, onclick should update color prop and value (not visible)
  
  return (
    <Box sx={{ 'width': `${13*40}px` }}>
      <CharArray handleOutputArray={handleOutputArray} />

      <Divider sx={{ mt: 2, mb: 1 }} />

      <Box display="flex" justifyContent="center" sx={{ my: 0, mx: 1 }}>
        <IconButton
          onClick={() => {}}
        >
          <AbcIcon />
        </IconButton>
        <IconButton
          color="success"
          onClick={() => {}}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          color="warning"
          onClick={() => {}}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          color="info"
          onClick={() => {}}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          color="success"
          onClick={() => {}}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          color="warning"
          onClick={() => {}}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          color="info"
          onClick={() => {}}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          onClick={() => {}}
        >
          <CancelIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mt: 1, mb: 2 }} />
      

      <Stack
        spacing={5}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}
        justifyContent="center"
      >
        <Button
          aria-label="clear"
          endIcon={<Delete />}
          onClick={() => sendMessage()}
          variant="outlined"
        >
          Clear
        </Button>

        <Button
          aria-label="send"
          endIcon={<SendIcon />}
          onClick={() => sendMessage()}
          variant="contained"
        >
          Send
        </Button>
      </Stack>
      
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => closeSnackbar()}
        message='Message pushed'
      />
    </Box>
  );
};

export default ChannelContentPushMessage;
