const ZERO_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '11', '13',
  '21', '23',
  '31', '33',
  '41', '42', '43',
]);

const ONE_FILLED_ROW_COLS_SET = new Set<string>([
  '01',
  '10', '11',
  '21',
  '31',
  '40', '41', '42',
]);

const TWO_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '13',
  '21', '22', '23',
  '31',
  '41', '42', '43',
]);

const THREE_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '13',
  '22', '23',
  '33',
  '41', '42', '43',
]);

const FOUR_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '03',
  '11', '13',
  '21', '22', '23',
  '33',
  '43',
]);

const FIVE_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '11',
  '21', '22', '23',
  '33',
  '41', '42', '43',
]);

const SIX_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '11',
  '21', '22', '23',
  '31', '33',
  '41', '42', '43',
]);

const SEVEN_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '13',
  '23',
  '33',
  '43',
]);

const EIGHT_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '11', '13',
  '21', '22', '23',
  '31', '33',
  '41', '42', '43',
]);

const NINE_FILLED_ROW_COLS_SET = new Set<string>([
  '01', '02', '03',
  '11', '13',
  '21', '22', '23',
  '33',
  '41', '42', '43',
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