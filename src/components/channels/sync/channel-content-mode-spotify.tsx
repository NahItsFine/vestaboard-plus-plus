import { Box, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { charArrayToCodeArray } from "../../../api/helpers";
import { getNowPlaying, readWritePost, SpotifyNowPlaying, SpotifyNowPlayingRaw } from "../../../api/api";
import { NUM_COLS, NUM_ROWS } from "../../../constants";
import { COLOUR_HEXES } from "../constants";
import FancySwitch from "../../misc/fancy-switch";
import { getStartingEndingColByLength } from "../helpers";
import { isUndefined } from "lodash";

function ChannelContentModeSpotify() {
  const pushCadenceSeconds = 15;

  const titleRow = 0;
  const titleStartCol = 7;
  const title = 'SPOTIFY';

  const subtitleRow = 1;
  const subtitleStartCol = 5;
  const subtitle = 'NOW PLAYING';

  const borderLeftStartRow = 0;
  const borderLeftStartCol = 0;
  const borderRightStartRow = 0;
  const borderRightStartCol = 20;
  const borderColor = COLOUR_HEXES.green;
  
  const artistRow = 3;
  const albumRow = 4;
  const songRow = 5;

  const [isOn, setIsOn] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const formatData = (rawData: SpotifyNowPlayingRaw): SpotifyNowPlaying => {
    return {
      isPlaying: rawData.is_playing,
      artist: rawData.item?.artists[0]?.name || 'N/A',
      album: rawData.item?.album?.name || 'N/A',
      song: rawData.item?.name || 'N/A',
    };
  }

  const formattedDataToCharArray = (formattedData: SpotifyNowPlaying): string[][] => {
    const charArray = Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(''));

    // Title
    let rowNum = titleRow;
    let colOffset = titleStartCol;
    let length = title.length;
    for (let col = colOffset; col < colOffset + length; col++) {
      charArray[rowNum][col] = title.charAt(col - colOffset).trim().toLocaleUpperCase() || '';
    }

    // Subtitle
    rowNum = subtitleRow;
    colOffset = subtitleStartCol;
    length = subtitle.length;
    for (let col = colOffset; col < colOffset + length; col++) {
      charArray[rowNum][col] = subtitle.charAt(col - colOffset).trim().toLocaleUpperCase() || '';
    }

    // Borders
    charArray[borderLeftStartRow][borderLeftStartCol] = borderColor;
    charArray[borderLeftStartRow+1][borderLeftStartCol] = borderColor;
    charArray[borderLeftStartRow][borderLeftStartCol+1] = borderColor;

    charArray[borderRightStartRow][borderRightStartCol] = borderColor;
    charArray[borderRightStartRow][borderRightStartCol+1] = borderColor;
    charArray[borderRightStartRow+1][borderRightStartCol+1] = borderColor;

    // return HERE if not currently playing anything
    if (!formattedData.isPlaying) {
      return charArray;
    }

    // Artist
    if (!isUndefined(formattedData.artist)) {
      rowNum = artistRow;
      const { startCol, endCol } = getStartingEndingColByLength(formattedData.artist.length);
      for (let col = startCol; col <= endCol; col++) {
        charArray[rowNum][col] = (formattedData.artist).charAt(col-startCol).trim().toLocaleUpperCase() || '';
      }
    }
    
    // Album
    if (!isUndefined(formattedData.album)) {
      rowNum = albumRow;
      const { startCol, endCol } = getStartingEndingColByLength(formattedData.album.length);
      for (let col = startCol; col <= endCol; col++) {
        charArray[rowNum][col] = (formattedData.album).charAt(col-startCol).trim().toLocaleUpperCase() || '';
      }
    }

    // Song
    if (!isUndefined(formattedData.song)) {
      rowNum = songRow;
      const { startCol, endCol } = getStartingEndingColByLength(formattedData.song.length);
      for (let col = startCol; col <= endCol; col++) {
        charArray[rowNum][col] = (formattedData.song).charAt(col-startCol).trim().toLocaleUpperCase() || '';
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
      const rawData: SpotifyNowPlayingRaw = await getNowPlaying();
      const formattedData: SpotifyNowPlaying = formatData(rawData);
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
        message={'Refreshed'} />
    </>
  );
}

export default ChannelContentModeSpotify;
