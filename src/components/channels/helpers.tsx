import { NUM_COLS } from "../../constants";

export const getStartingEndingColByLength = (length: number) => {
  if (length === 0) {
    return {
      startCol: 0,
      endCol: 0,
    };
  }

  if (length >= 22) {
    return {
      startCol: 0,
      endCol: 21,
    };
  }

  if (length%2 === 0) {
    return {
      startCol: (NUM_COLS/2 - 1) - (length/2 - 1),
      endCol: (NUM_COLS/2) + (length/2 - 1),
    };
  } else {
    length += 1;
    return {
      startCol: (NUM_COLS/2 - 1) - (length/2 - 1),
      endCol: (NUM_COLS/2) + (length/2 - 1),
    };
  }
  
}