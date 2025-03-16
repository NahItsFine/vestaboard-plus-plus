const ZERO_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '10', '12',
  '20', '22',
  '30', '32',
  '40', '41', '42',
]);

const ONE_FILLED_ROW_COLS_SET = new Set<string>([
  '01',
  '10', '11',
  '21',
  '31',
  '40', '41', '42',
]);

const TWO_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '12',
  '20', '21', '22',
  '30',
  '40', '41', '42',
]);

const THREE_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '12',
  '21', '22',
  '32',
  '40', '41', '42',
]);

const FOUR_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '02',
  '10', '12',
  '20', '21', '22',
  '32',
  '42',
]);

const FIVE_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '10',
  '20', '21', '22',
  '32',
  '40', '41', '42',
]);

const SIX_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '10',
  '20', '21', '22',
  '30', '32',
  '40', '41', '42',
]);

const SEVEN_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '12',
  '22',
  '32',
  '42',
]);

const EIGHT_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '10', '12',
  '20', '21', '22',
  '30', '32',
  '40', '41', '42',
]);

const NINE_FILLED_ROW_COLS_SET = new Set<string>([
  '00', '01', '02',
  '10', '12',
  '20', '21', '22',
  '32',
  '40', '41', '42',
]);

export const DIGIT_TO_FILLED_ROW_COLS_SET = {
  0: ZERO_FILLED_ROW_COLS_SET,
  1: ONE_FILLED_ROW_COLS_SET,
  2: TWO_FILLED_ROW_COLS_SET,
  3: THREE_FILLED_ROW_COLS_SET,
  4: FOUR_FILLED_ROW_COLS_SET,
  5: FIVE_FILLED_ROW_COLS_SET,
  6: SIX_FILLED_ROW_COLS_SET,
  7: SEVEN_FILLED_ROW_COLS_SET,
  8: EIGHT_FILLED_ROW_COLS_SET,
  9: NINE_FILLED_ROW_COLS_SET,
}