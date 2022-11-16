import styled, {css} from "styled-components";
import {ICommunicate} from "@customTypes/global.types";
import {device} from "@constants/mediaQuery.constants";

export const EmailCommunicateStyle = styled.div<ICommunicate>`
  padding: 150px 15px 15px;
  text-align: center;

  ${device.tablet`
    padding-top: 85px;
    `}

  h2 {
    text-align: center;
    font-size: 24px;

    ${device.tablet`
        font-size: 21px;
    `}
    
    span {
      color: rgba(15, 107, 12, 1);

      ${device.tablet`
        font-size: 19px;
    `}
    }

    &:before {
      content: "\\00D7";
      position: absolute;
      font-size: 100px;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);

      ${device.tablet`
        font-size: 70px;
    `}

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