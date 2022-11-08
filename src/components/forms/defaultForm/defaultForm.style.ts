import styled from "styled-components";

export const FormStyle = styled.form`
  background: white;
  width: 100%;
  padding: 20px;
  
  p {
    font-size: 14px;
    color: red;
    margin: 5px;
    
    &:first-letter {
      text-transform: uppercase;
    }
  }

  input[type="submit"] {
    cursor: pointer;
    margin-top: 15px;
    border-radius: 20px;
    border: 1px solid rgba(15,107,12,1);
    background-color: rgba(15,107,12,1);
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition:
            background 250ms ease-in-out,
            transform 150ms ease,
            opacity 250ms ease-in-out,
            filter 300ms ease-in-out;
    
    &:focus,
    &:hover {
      filter: brightness(0.8);
      outline: none;
      outline-offset: -4px;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`