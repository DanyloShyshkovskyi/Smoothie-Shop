import styled, {css, keyframes} from "styled-components";
import {IAuthContainer} from "../../../types/style.types";

export const AuthContainerStyle = styled.div<IAuthContainer>`
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 580px;
  height: 100%;
  box-sizing: border-box;

  ${props => props.rightPanelActive && css`

    ${FormSingInStyle} {
      transform: translateX(100%);
    }

    ${FormSignUpStyle} {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: ${show} 0.6s;
    }

    ${OverlayStyle} {
      transform: translateX(50%);
    }

    ${OverlayContainer} {
      transform: translateX(-100%);
    }

    ${OverlayPanelLeft} {
      transform: translateX(0);
    }

    ${OverlayPanelRight} {
      transform: translateX(20%);
    }
  `}
`

export const FormContainerStyle = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 100%;
  //transition: all 0.6s ease-in-out;
`

export const FormSingInStyle = styled(FormContainerStyle)`
  left: 0;
  width: 50%;
  z-index: 2;
`
export const FormSignUpStyle = styled(FormContainerStyle)`
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
`

const show = keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`

export const OverlayContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  //transition: transform 0.6s ease-in-out;
  z-index: 10;
`

export const OverlayStyle = styled.div`
  box-sizing: border-box;
  background: rgb(153, 237, 98);
  background: linear-gradient(90deg, rgba(153, 237, 98, 1) 0%, rgba(15, 107, 12, 1) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  //transition: transform 0.6s ease-in-out;
`

export const OverlayPanel = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  //transition: transform 0.6s ease-in-out;

  button {
    margin-top: 15px;
    cursor: pointer;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in,
    background-color 300ms ease-in;

    &:focus,
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      outline: none;
      outline-offset: -4px;
    }

    &:active {
      transform: scale(0.95);
    }
  }
`

export const OverlayPanelLeft = styled(OverlayPanel)`
  transform: translateX(-20%);
`

export const OverlayPanelRight = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
`