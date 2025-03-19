import { Box, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { charArrayToCodeArray } from "../../../api/helpers";
// import { HTTP_METHOD, performHttpRequest, readWritePost } from "../../../api/api";
// import { WORLD_TIME_ENDPOINT } from "../../../api/config";
import { readWritePost } from "../../../api/api";
import { NUM_COLS, NUM_ROWS } from "../../../constants";
import { COLOUR_HEXES } from "../constants";
import { DIGIT_TO_FILLED_ROW_COLS_SET } from "../clock-constants";
import FancySwitch from "../../misc/fancy-switch";

// interface rawData {
//   datetime: string,
// }

interface formattedData {
  hourA: number,
  hourB: number,
  minuteA: number,
  minuteB: number
}

function ChannelContentModeClock() {
  const pushCadenceSeconds = 15;

  const colonStartCol = 10;
  const colonBottomStartRow = 3;
  const colonWidth = 2;
  const colonHeight = 2;

  const digitWidth = 3;
  const digitHeight = 5;
  const hourAStartCol = 1;
  const hourBStartCol = 5;
  const minuteAStartCol = 14;
  const minuteBStartCol = 18;

  const [isOn, setIsOn] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  // const getData = async (): Promise<rawData> => {
  //   const data: rawData = await performHttpRequest(
  //     HTTP_METHOD.GET,
  //     WORLD_TIME_ENDPOINT
  //   );
  //   return {
  //     datetime: data.datetime,
  //   };
  // }

  // const formatData = (rawData: rawData): formattedData => {
  const formatData = (): formattedData => {
    // const date = new Date(rawData.datetime);
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const hourA = Math.floor(hours / 10)
    const hourB = hours % 10
    const minuteA = Math.floor(minutes / 10)
    const minuteB = minutes % 10

    return {
      hourA: hourA,
      hourB: hourB,
      minuteA: minuteA,
      minuteB: minuteB,
    };
  }

  const shouldFillChar = (digit: number, row: number, col: number): boolean => {
    return DIGIT_TO_FILLED_ROW_COLS_SET[digit as keyof typeof DIGIT_TO_FILLED_ROW_COLS_SET].has(`${row}${col}`);
  }

  const formattedDataToCharArray = (formattedData: formattedData): string[][] => {
    const charArray = Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(''));
    
    // Digit Hour A
    let rowOffset = 0;
    let colOffset = hourAStartCol;
    for (let row = rowOffset; row < rowOffset + digitHeight; row++) {
      for (let col = colOffset; col < colOffset + digitWidth; col++) {
        charArray[row][col] = shouldFillChar(formattedData.hourA, row - rowOffset, col - colOffset) ? COLOUR_HEXES.white : '';
      }
    }

    // Digit Hour B
    rowOffset = 0;
    colOffset = hourBStartCol;
    for (let row = rowOffset; row < rowOffset + digitHeight; row++) {
      for (let col = colOffset; col < colOffset + digitWidth; col++) {
        charArray[row][col] = shouldFillChar(formattedData.hourB, row - rowOffset, col - colOffset) ? COLOUR_HEXES.white : '';
      }
    }

    // Colon Top
    rowOffset = 0;
    for (let row = rowOffset; row < rowOffset + colonHeight; row++) {
      for (let col = colonStartCol; col < (colonStartCol + colonWidth); col++) {
        charArray[row][col] = COLOUR_HEXES.white;
      }
    }

    // Colon Bottom
    rowOffset = colonBottomStartRow;
    for (let row = rowOffset; row < (rowOffset + colonHeight); row++) {
      for (let col = colonStartCol; col < (colonStartCol + colonWidth); col++) {
        charArray[row][col] = COLOUR_HEXES.white;
      }
    }
    
    // Digit Minute A
    rowOffset = 0;
    colOffset = minuteAStartCol;
    for (let row = 0; row < digitHeight; row++) {
      for (let col = colOffset; col < colOffset + digitWidth; col++) {
        charArray[row][col] = shouldFillChar(formattedData.minuteA, row - rowOffset, col - colOffset) ? COLOUR_HEXES.white : '';
      }
    }


    // Digit Minute B
    rowOffset = 0;
    colOffset = minuteBStartCol;
    for (let row = rowOffset; row < rowOffset + digitHeight; row++) {
      for (let col = colOffset; col < colOffset + digitWidth; col++) {
        charArray[row][col] = shouldFillChar(formattedData.minuteB, row - rowOffset, col - colOffset) ? COLOUR_HEXES.white : '';
      }
    }

    return charArray;
  }

  const sendMessage = async (charArray: string[][]) => {
    const codeArray: number[][] = charArrayToCodeArray(charArray);
    await readWritePost(codeArray);
    setIsSnackbarOpen(true);
  }

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  }

  useEffect(() => {
    if (!isOn) {
      return;
    }

    const interval = setInterval(async () => {
      // const rawData: rawData = await getData();
      // const formattedData: formattedData = formatData(rawData);
      const formattedData: formattedData = formatData();
      const charArray: string[][] = formattedDataToCharArray(formattedData);
      sendMessage(charArray);
    }, pushCadenceSeconds * 1000);

    // Cleanup interval on component unmount or when isOn changes
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  return (
    <>
      <Box sx={{ display: 'flex', m: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FancySwitch onChange={(event) => setIsOn(event.target.checked)} />
      </Box>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => closeSnackbar()}
        message={'Pushed current time'} />
    </>
  );
}

export default ChannelContentModeClock;
