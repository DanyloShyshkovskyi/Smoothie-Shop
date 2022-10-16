import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
  padding: 10px;
  margin-top: 5px;

  input {
    font-family: inherit;
    width: 100%;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    outline: 0;
    font-size: 16px;
    color: #212121;
    padding: 10px;
    background: transparent;
    transition: all 0.2s;
    box-sizing: border-box;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ label {
      font-size: 16px;
      cursor: text;
      top: 17px;
      background: transparent;
    }
  }

  label, input:focus ~ label {
    position: absolute;
    top: 0;
    padding: 3px;
    background: white;
    left: 20px;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #9b9b9b;
  }

  input:focus ~ label {
    color: rgba(15,107,12,1);
  }

  input:focus {
    padding: 9px;
    border: 2px solid rgba(15,107,12,1);
  }
`