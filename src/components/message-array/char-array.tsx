/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "react";
import InputBox from "./input-box";
import { Box } from "@mui/material";

const supportedRegEx = /^[A-Z0-9!@#$%&()-+=;:'",./°]+$/;
const numRows = 6;
const numCols = 22;

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

interface CharArrayProps {
  handleOutputArray: any;
}

class CharArray extends Component<CharArrayProps> {
  state: any;
  inputElements: { [key: string]: HTMLInputElement };

  constructor(props: CharArrayProps) {
    super(props)
    this.state = {
      charArray: Array.from({ length: numRows }, () => Array(numCols).fill('')),
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnPaste = this.handleOnPaste.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.inputElements = {};
  }

  renderRow(rowNum: number) {
    const charModules: any[] = Array(numCols).fill(undefined);

    for (let col = 0; col < numCols; col++) {
      charModules[col] = (
        <InputBox
          type='text'
          name={getRowColId(rowNum, col)}
          key={getRowColId(rowNum, col)}
          handleKeyDown={this.handleKeyDown}
          handleFocus={this.handleFocus}
          handleChange={this.handleChange}
          handleOnPaste={this.handleOnPaste}
          handleOnClick={this.handleOnClick}
          inputProps={{}}
          inputRef={(el: HTMLInputElement) => {
            if (!el) return
            this.inputElements[el.name] = el
          }}
        />
      );
  }

    return (
      <Box sx={{ 'mb': '1' }}>
        {charModules}
      </Box>
    );
  }
  
  render() {
    const charArray = [];
    for (let row = 0; row < numRows; row++) {
      charArray.push(this.renderRow(row));
    }
    return (
      <Box sx={{ 'overflow-x': 'scroll'}}>
        {charArray}
      </Box>
    );
  }

  handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { row, col } = getRowColFromId(target.name);
    if (target.value.match(supportedRegEx)) {
      this.state.charArray[row][col] = target.value;
      this.setModuleOutput();
      this.focusNextChar(target);
    } else {
      target.value = this.state.charArray[row][col];
    }
  }

  handleKeyDown({ target, key }: { target: HTMLInputElement, key: string }) {
    if (key === 'Backspace') {
      if (target.value === '' && target.previousElementSibling !== null) {
        (target.previousElementSibling as HTMLInputElement).value = '';
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

  handleOnClick() {
    // support soon
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

  setModuleOutput() {
    this.props.handleOutputArray(this.state.charArray);
  }
}

export default CharArray;