import { CHARACTER_MAP, CHARACTER_MAP_CODE_TO_LABEL, CHARACTER_MAP_LABEL_TO_CODE } from "../components/channels/constants";

const fallbackCode = CHARACTER_MAP[0].code; // Blank
const fallbackLabel = CHARACTER_MAP[0].label; // Blank

export const charArrayToCodeArray = (charArray: string[][]): number[][] => {
  const codeArray: number[][] = Array.from({ length: charArray.length }, () => Array(charArray[0].length).fill(fallbackCode));

  for (let row = 0; row < charArray.length; row++) {
    for (let col = 0; col < charArray[0].length; col++) {
      codeArray[row][col] = CHARACTER_MAP_LABEL_TO_CODE.get(charArray[row][col]) ?? fallbackCode;
    }
  }

  return codeArray;
} 

export const codeArrayToCharArray = (codeArray: number[][]): string[][] => {
  const charArray: string[][] = Array.from({ length: codeArray.length }, () => Array(codeArray[0].length).fill(fallbackLabel));

  for (let row = 0; row < codeArray.length; row++) {
    for (let col = 0; col < codeArray[0].length; col++) {
      charArray[row][col] = CHARACTER_MAP_CODE_TO_LABEL.get(codeArray[row][col]) ?? fallbackLabel
    }
  }

  return charArray;
} 