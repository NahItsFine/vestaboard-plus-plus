import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { charArrayToCodeArray } from "../../../api/helpers";
import { HTTP_METHOD, performHttpRequest } from "../../../api/api";
import { espnNbaScoresApi } from "../../../api/config";
import { NUM_COLS, NUM_ROWS } from "../../../constants";
import { COLOUR_HEXES } from "../constants";
import FancySwitch from "../../misc/fancy-switch";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GAME_STATUS = Object.freeze({
  SCHEDULED: 'STATUS_SCHEDULED',
  // TODO: TBD
});
export type GameStatusType = typeof GAME_STATUS[keyof typeof GAME_STATUS];

interface rawGame {
  name: string,
  status: GameStatusType,
  period: number,
  isCompleted: boolean,
  score: string, // TODO: TBD
}

interface rawData {
  day: string,
  games: rawGame[]
}

interface formattedData {
  tbd: string
}

function ChannelContentModeNba() {
  const pushCadenceSeconds = 20;

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

  const getData = async (): Promise<rawData> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await performHttpRequest(
      HTTP_METHOD.GET,
      espnNbaScoresApi
    );

    const rawGames: rawGame[] = [];
    for (const event of data.events) {
      rawGames.push({
        name: event.shortName,
        period: event.status.period,
        status: event.status.type.name as GameStatusType,
        isCompleted: event.status.type.completed,
        score: '', // TODO: TBD
      });
    }

    return {
      day: data.day.date,
      games: rawGames,
    };
  }

  const formatData = (rawData: rawData): formattedData => {
    // const date = new Date(rawData.datetime);
    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    // return {
    //   hourA: Math.floor(hours / 10),
    //   hourB: hours % 10,
    //   minuteA: Math.floor(minutes / 10),
    //   minuteB: minutes % 10,
    // };
  }

  const formattedDataToCharArray = (formattedData: formattedData): string[][] => {
    const charArray = Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(''));
    
    // Header
    // Scores

    return charArray;
  }

  const sendMessage = (charArray: string[][]) => {
    const codeArray: number[][] = charArrayToCodeArray(charArray);
    // TODO: call endpoint with codeArray
    console.log('sendMessage: ', JSON.stringify(codeArray));
  }

  useEffect(() => {
    if (!isOn) {
      return;
    }

    const interval = setInterval(async () => {
      const rawData: rawData = await getData();
      const formattedData: formattedData = formatData(rawData);
      const charArray: string[][] = formattedDataToCharArray(formattedData);
      sendMessage(charArray);
    }, pushCadenceSeconds * 1000);

    // Cleanup interval on component unmount or when isOn changes
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  return (
    <Box sx={{ display: 'flex', m: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FancySwitch onChange={(event) => setIsOn(event.target.checked)}/>
    </Box>
  );
}

export default ChannelContentModeNba;
