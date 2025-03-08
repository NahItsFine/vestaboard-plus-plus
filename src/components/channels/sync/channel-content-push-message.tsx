import { Box, Divider, Button, IconButton, Snackbar, Stack, alpha } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CircleIcon from '@mui/icons-material/Circle';
import AbcIcon from '@mui/icons-material/Abc';
import { isNull } from "lodash";
import useAppStore from "../../../store";
import { useRef, useState } from "react";
import CharArray from "./message-array/char-array";
import { Delete } from "@mui/icons-material";
import { COLOUR_HEXES } from "../constants";
import { PUSH_MESSAGE_INPUT_MODE, PushMessageInputModeType } from "./constants";

function ChannelContentPushMessage() {
  const { openChannel } = useAppStore();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [charArray, setCharArray] = useState<string[][]>([]);
  const charArrayRef = useRef<CharArray>(null);
  const [inputMode, setInputMode] = useState<PushMessageInputModeType>(PUSH_MESSAGE_INPUT_MODE.TEXT);
  const translucentBg = alpha(COLOUR_HEXES.white, 0.3);

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
  
  const handleClearBoard = () => {
    if (charArrayRef.current) {
      charArrayRef.current.resetCharArray();
    }
  }

  if (isNull(openChannel)) {
    return <></>;
  }

  // on click: if state = if color mode, onclick should update color prop and value (not visible)
  // scaffold api layer with charArray <> codeArray translations (get, post)
  
  return (
    <Box sx={{ 'width': `${13*40}px` }}>
      <CharArray ref={charArrayRef} handleOutputArray={handleOutputArray} />

      <Divider sx={{ mt: 2, mb: 1 }} />

      <Box display="flex" justifyContent="center" sx={{ my: 0, mx: 1 }}>
        <IconButton
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.TEXT)}
          style={{
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.TEXT ? translucentBg : '',
          }}
        >
          <AbcIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.red,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.RED ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.RED)}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.orange,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.ORANGE ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.ORANGE)}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.yellow,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.YELLOW ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.YELLOW)}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.green,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.GREEN ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.GREEN)}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.blue,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.BLUE ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.BLUE)}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.violet,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.VIOLET ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.VIOLET)}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.white,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.WHITE ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.WHITE)}
        >
          <CircleIcon />
        </IconButton>
        <IconButton
          style={{
            color: COLOUR_HEXES.black,
            background: inputMode === PUSH_MESSAGE_INPUT_MODE.BLACK ? translucentBg : '',
          }}
          onClick={() => setInputMode(PUSH_MESSAGE_INPUT_MODE.BLACK)}
        >
          <CircleIcon />
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
          onClick={() => handleClearBoard()}
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
