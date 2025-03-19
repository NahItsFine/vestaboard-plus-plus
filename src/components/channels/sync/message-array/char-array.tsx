/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "react";
import InputBox from "./input-box";
import { Box } from "@mui/material";
import { toUpper } from "lodash";
import { PUSH_MESSAGE_INPUT_MODE, PushMessageInputColorValueType, PushMessageInputModeType } from "../constants";
import { NUM_ROWS, NUM_COLS } from "../../../../constants";

const lowerCaseRegEx = /^[a-z]/;
const supportedRegEx = /^[A-Z0-9!@#$%&()\-+=;:'",./°]+$/;
const borderStyle = '1px solid white';

const getCellBorderStyles = (row: number, col: number) => {
  const borderTopStyle = (row === NUM_ROWS/2) ? borderStyle : '';
  const borderBottomStyle = (row === NUM_ROWS/2 - 1) ? borderStyle : '';
  const borderLeftStyle = (col === NUM_COLS/2) ? borderStyle : '';
  const borderRightStyle = (col === NUM_COLS/2 - 1) ? borderStyle : '';
  return {
    'borderTop': borderTopStyle,
    'borderBottom': borderBottomStyle,
    'borderLeft': borderLeftStyle,
    'borderRight': borderRightStyle,
  };
}

const getRowColId = (row: number, col: number) => {
  return `${row}-${col}`;
}

const getRowColFromId = (id: string) => {
  const splits = id.split('-');
  return {
    row: parseInt(splits[0].replace('-', '')),
    col: parseInt(splits[1].replace('-', '')),
  }
}

// Reset all values and stylings done on an input box
const resetInputBox = (target: HTMLInputElement) => {
  target.value = '';
  target.style.background = '';
  target.style.color = '';
}

// Set colors for input box
const setInputBoxColor = (target: HTMLInputElement, colourHex: PushMessageInputColorValueType) => {
  target.value = colourHex;
  target.style.background = colourHex;
  target.style.color = colourHex;
}
const getInputBoxColorAsStyle = (colourHex: PushMessageInputColorValueType) => {
  return {
    'background': colourHex,
    'color': colourHex,
  }
}

interface CharArrayProps {
  charArray: string[][];
  setCharArray: (charArray: string[][]) => void;
  inputMode: PushMessageInputModeType;
}

class CharArray extends Component<CharArrayProps> {
  state: any;
  inputElements: { [key: string]: HTMLInputElement };  

  constructor(props: CharArrayProps) {
    super(props)
    this.state = {
      charArray: this.props.charArray.length !== 0 ? this.props.charArray : Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill('')),
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnPaste = this.handleOnPaste.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.inputElements = {};
  }

  componentDidUpdate(prevProps: CharArrayProps) {
    if (prevProps.charArray !== this.props.charArray) {
      this.setState({ charArray: this.props.charArray });
    }
  }

  renderRow(rowNum: number) {
    const charModules: any[] = Array(NUM_COLS).fill(undefined);

    for (let col = 0; col < NUM_COLS; col++) {
      let style = getCellBorderStyles(rowNum, col);
      // If starting value is a color, set the styles accordingly
      const startingState = this.state.charArray[rowNum][col];
      const startingStateArray = Array.from(startingState);
      if(startingStateArray[0] === '#' && startingStateArray.length > 1) {
        style = {
          ...style,
          ...getInputBoxColorAsStyle(startingState as PushMessageInputColorValueType)
        };
      }

      charModules[col] = (
        <InputBox
          type='text'
          id={getRowColId(rowNum, col)}
          name={getRowColId(rowNum, col)}
          key={getRowColId(rowNum, col)}
          value={startingState}
          handleKeyDown={this.handleKeyDown}
          handleFocus={this.handleFocus}
          handleChange={this.handleChange}
          handleOnPaste={this.handleOnPaste}
          handleOnClick={this.handleOnClick}
          inputProps={{
            style: style,
          }}
          inputRef={(el: HTMLInputElement) => {
            if (!el) return
            this.inputElements[el.name] = el
          }}
        />
      );
  }

    return (
      <Box key={rowNum} sx={{ 'mb': '1' }}>
        {charModules}
      </Box>
    );
  }
  
  render() {
    const charArray = [];
    for (let row = 0; row < NUM_ROWS; row++) {
      charArray.push(this.renderRow(row));
    }
    return (
      <Box sx={{ 'overflowX': 'scroll'}}>
        {charArray}
      </Box>
    );
  }

  handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.inputMode === PUSH_MESSAGE_INPUT_MODE.TEXT) {
      this.handleTextModeChange(target as HTMLInputElement);
    } else {
      this.handleColourModeChange(target as HTMLInputElement);
    }
  }

  handleTextModeChange(target: HTMLInputElement) {
    if (target.value.match(lowerCaseRegEx)) {
      target.value = toUpper(target.value);
    }

    const { row, col } = getRowColFromId(target.name);
    if (target.value.match(supportedRegEx)) {
      this.state.charArray[row][col] = target.value;
      this.setModuleOutput();
      this.focusNextChar(target);
    } else {
      target.value = this.state.charArray[row][col];
    }
  }

  // Do nothing on change for colors, only update on click
  handleColourModeChange(target: HTMLInputElement) {
    const { row, col } = getRowColFromId(target.name);
    target.value = this.state.charArray[row][col];
  }

  handleKeyDown({ target, key }: { target: HTMLInputElement, key: string }) {
    if (key === 'Backspace') {
      if (target.value === '' && target.previousElementSibling !== null) {
        resetInputBox(target.previousElementSibling as HTMLInputElement);
        const { row, col } = getRowColFromId(target.name);
        this.state.charArray[row][col-1] = '';
        this.focusPrevChar(target);
      } else {
        const { row, col } = getRowColFromId(target.name);
        this.state.charArray[row][col] = '';
      }
      this.setModuleOutput();
    } else if (key === 'ArrowLeft') {
      this.focusPrevChar(target)
    } else if (key === 'ArrowRight' || key === ' ') {
      this.focusNextChar(target)
    }
  }

  handleFocus({ target }: { target: HTMLInputElement }) {
    const el = target;
    // In most browsers .select() does not work without the added timeout.
    setTimeout(function () {
      el.select();
    }, 0);
  }

  handleOnPaste() {
    // not supported
  }

  handleOnClick({ target }: { target: HTMLInputElement }) {
    if (this.props.inputMode === PUSH_MESSAGE_INPUT_MODE.TEXT) {
      resetInputBox(target);
      const { row, col } = getRowColFromId(target.name);
      this.state.charArray[row][col] = '';
    } else {
      this.handleColourModeClick(target, this.props.inputMode);
    }
  }

  handleColourModeClick(target: HTMLInputElement, colorHex: PushMessageInputColorValueType) {
    const { row, col } = getRowColFromId(target.name);
    this.state.charArray[row][col] = colorHex;
    setInputBoxColor(target, colorHex);
  }

  focusPrevChar(target: HTMLInputElement) {
    if (target.previousElementSibling !== null) {
      (target.previousElementSibling as HTMLInputElement).focus();
    }
  }

  focusNextChar(target: HTMLInputElement) {
    if (target.nextElementSibling !== null) {
      (target.nextElementSibling as HTMLInputElement).focus();
    }
  }

  // Syncs the component output array to the local state charArray
  setModuleOutput() {
    this.props.setCharArray(this.state.charArray);
  }

  // Visually clear each input box
  resetCharArray() {
    this.state.charArray = Array.from({ length: NUM_ROWS }, () => Array(NUM_COLS).fill(''));
    this.setModuleOutput();

    // To clear every input box
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        const inputBoxElement = document.getElementById(getRowColId(row, col));
        if (inputBoxElement) {
          resetInputBox(inputBoxElement as HTMLInputElement);
        }
      }
    }
  }

  
}

export default CharArray;