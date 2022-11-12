import styled, {css} from "styled-components";
import {IModalContainer, IModalDialog} from "../../types/style.types";
import {device} from "../../utils/constants/mediaQuery.constants";

export const ModalContainer = styled.div<IModalContainer>`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  overflow: auto;

  ${props => props.show && css`
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${device.tablet`
      align-items: flex-start;
      box-sizing: border-box;
    `}
`

export const ModalVeil = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.85);
  position: fixed;
`

export const ModalDialog = styled.div<IModalDialog>`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  transform: translateY(50px);

  ${device.tablet`
      width: 100%;
      align-items: flex-start;
      box-sizing: border-box;
      margin: 70px 10px;
    `}

  ${props => props.type === 'auth' && css`
    padding: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    max-width: 768px;
    max-height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ${props => props.type === 'accountDetails' && css`
    padding: 0;
    background: transparent;
    width: 100%;
    height: 100%;
    max-width: 585px;
    max-height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ${props => props.type === "cart" && css`
    width: 50%;
    max-width: 500px;
    
    h1 {
      text-align: left;
    }
  `}
`

