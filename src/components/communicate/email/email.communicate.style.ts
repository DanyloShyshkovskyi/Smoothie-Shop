import styled, {css} from "styled-components";
import {ICommunicate} from "../../../types/global.types";

export const EmailCommunicateStyle = styled.div<ICommunicate>`
  padding: 150px 15px 15px;
  text-align: center;

  h2 {
    text-align: center;
    font-size: 24px;
    
    span {
      color: rgba(15, 107, 12, 1);
    }

    &:before {
      content: "\\00D7";
      position: absolute;
      font-size: 100px;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);

      ${props => props.isError && css`
        content: "\\00D7";
        color: darkred;
      `}

      ${props => props.isSuccess && css`
        content: "\\2713";
        color: rgba(15, 107, 12, 1);
      `}
    }
  }

  ${props => props.isError && css`
    color: darkred;
  `}

  ${props => props.isSuccess && css`
    color: black;
  `}
`