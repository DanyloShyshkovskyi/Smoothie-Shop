import styled, {css} from "styled-components";
import {HEADER_HEIGHT} from "@helpers/style.helpers";
import {ArrowsProps} from "@customTypes/style.types";
import {device} from "@constants/mediaQuery.constants";

export const ProductContainerView = styled.div`
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: white;
  margin-top: ${HEADER_HEIGHT}px;

  nav {
    background-color: rgba(255, 255, 255, 0.52);
    display: flex;
    flex-direction: row;
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
    z-index: 2;
    padding-right: 40px;
    box-shadow: rgba(17, 17, 26, 0.1) 0 1px 0;
  }

  ${device.tablet`
      nav {
        position: sticky;
        top: 70px;
  `}

  article {
    position: relative;
    width: 100%;
    margin-top: calc(100vh - ${HEADER_HEIGHT}px - 57px - 95px);
    background-color: rgba(255, 255, 255, 0.52);
    backdrop-filter: blur(5px);
    padding: 0 10px;
    box-sizing: border-box;
    z-index: 2;
  }
`

export const SliderArrow = styled.img<ArrowsProps>`
  border: 1px solid #999;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 50%;
  outline: none;
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 3;
  cursor: pointer;
  backdrop-filter: blur(3px);

  ${device.tablet`
      position: fixed;
      top: 80px;
      background: none;
      backdrop-filter: none;
      border: none;
      padding: 10px
  `
  }

  ${props => props.disabled && css`
    opacity: 0.3;
    background: rgba(153, 153, 153, 0.34);
    pointer-events: none;
  `}

  ${props => props.next && css`
    top: 50%;
    right: 50px;

  ${device.tablet`
      right: 10px;
  `}
  `}

  ${props => props.prev && css`
    top: 50%;
    left: 50px;

    ${device.tablet`
      left: auto;
      right: 50px;
  `}
  `}
`