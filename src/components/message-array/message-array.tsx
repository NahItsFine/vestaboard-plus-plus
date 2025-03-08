import { Box } from '@mui/material';
import RICIBs from 'react-individual-character-input-boxes';

function MessageArray() {
  const supportedRegEx = /^[A-Z0-9!@#$%&()-+=;:'",./°]+$/i;
  const boxStyle = {
    'maxWidth': '25px',
    'backgroundColor': '#000000',
    'margin': '1px',
    'font-size': '20px'
  }
  // const numRows = 6;
  const numCols = 22;

  const handleOutput_0 = (output: string) => {
    console.log('ROW #0 output: ', output)
  }

  return (
    <Box>
      <RICIBs
        amount = {numCols}
        handleOutputString={(output) => handleOutput_0(output)}
        inputProps={{
          style: boxStyle,
          placeholder: "_",
          default: '_'
        }}
        inputRegExp={supportedRegEx}
      />
    </Box>
  )
};

export default MessageArray;