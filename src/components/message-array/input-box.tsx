/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components'

interface InputBoxProps {
  type: any,
  handleKeyDown: any,
  handleChange: any,
  handleFocus: any,
  handleOnPaste: any,
  handleOnClick: any,
  name: any,
  inputRef: any,
  inputProps: any,
}

const Input = styled.input`
  justify-content: space-between;
  width: 13px;
  height: 20px;
  margin: 1px;
  border-radius: 5px;
  background-color: #000000;
  text-align: center;
  font-size: 15px;
  font-weight: 500; 
  border-bottom:0.5px solid grey;
`

const InputBox = ({ type, handleKeyDown, handleChange, handleFocus, handleOnPaste, handleOnClick, name, inputRef, inputProps }: InputBoxProps) => {
  return (
    <Input
      {...inputProps}
      type={type}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onFocus={handleFocus}
      onPaste={handleOnPaste}
      onClick={handleOnClick}
      maxLength='1'
      name={name}
      ref={inputRef}
    />
  );

}

export default InputBox;
