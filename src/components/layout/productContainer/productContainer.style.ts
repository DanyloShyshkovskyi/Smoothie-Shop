import styled, {css} from "styled-components";
import {HEADER_HEIGHT} from "../../../utils/helpers/style.helpers";
import {ArrowsProps} from "../../../types/style.types";

export const ProductContainerView = styled.div`
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: white;
  margin-top: ${HEADER_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  z-index: 1;
  cursor: pointer;
  backdrop-filter: blur(3px);

  ${props => props.disabled && css`
    opacity: 0.3;
    background: rgba(153, 153, 153, 0.34);
    pointer-events: none;
  `}

  ${props => props.next && css`
    top: 50%;
    right: 50px;
  `}

  ${props => props.prev && css`
    top: 50%;
    left: 50px;
  `}
`