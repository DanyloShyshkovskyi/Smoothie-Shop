import styled from "styled-components";
import {ButtonReset} from "../../../../utils/helpers/style.helpers";

export const EmailButton = styled(ButtonReset)`
  background: white;
  border: 1px black solid;
  color: black;
  border-radius: 20px;
  margin: 30px 0 10px 10px;
  float: right;
  position: relative;
  transition: 0.3s all ease-in-out;

  &:after {
    opacity: 0;
    font-size: 21px;
    top: 15px;
    right: 15px;
    content: "\\2192";
    position: absolute;
    transition: 0.3s all ease-in-out;
  }
  
  &:hover,
  &:focus {
    background: white;
    padding-right: 45px;

    &:after {
      opacity: 1;
    }
  }
  
  &:active {
    &:after {
      transform: translateX(10px);
    }
  }
`