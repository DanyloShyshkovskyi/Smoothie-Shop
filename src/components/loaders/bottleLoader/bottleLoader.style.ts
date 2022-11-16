import styled, {css} from "styled-components";
import {HEADER_HEIGHT} from "@helpers/style.helpers";
import {BottleLoaderSvgParams} from "./bottleLoader.svg";

export const LoaderBackgroundWhite = styled.div<BottleLoaderSvgParams>`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  top: ${HEADER_HEIGHT}px;
  width: 100%;
  background: white;
  z-index: 10;
  position: fixed;

  ${props => props.fullAbsolute && css`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 20;
    background: rgba(255,255,255,0.50);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    position: absolute;
  `}
`

export const BottleLoaderStyle = styled.svg`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .mask-rect {
    animation: fill 2s ease-in-out infinite;
  }

  @keyframes fill {
    0% {
      height: 0;
    }
    50% {
      height: 75%;
    }
    100% {
      height: 0;
    }
  }
`