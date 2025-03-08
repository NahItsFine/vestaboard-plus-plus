import { COLOUR_HEXES } from "../constants";

export const PUSH_MESSAGE_INPUT_MODE = Object.freeze({
  TEXT: 'text',
  RED: COLOUR_HEXES.red,
  ORANGE: COLOUR_HEXES.orange,
  YELLOW: COLOUR_HEXES.yellow,
  GREEN: COLOUR_HEXES.green,
  BLUE: COLOUR_HEXES.blue,
  VIOLET: COLOUR_HEXES.violet,
  WHITE: COLOUR_HEXES.white,
  BLACK: COLOUR_HEXES.black,
});
export type PushMessageInputModeType = typeof PUSH_MESSAGE_INPUT_MODE[keyof typeof PUSH_MESSAGE_INPUT_MODE];
