import styled, {css} from "styled-components";
import {IProgressButtonStyle} from "../../../types/style.types";

const SvgStyle = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  pointer-events: none;

  path {
    opacity: 0;
    fill: none;
  }
`

export const ProgressCircleStyle = styled(SvgStyle)`

  path {
    stroke: #1ECD97;
    stroke-width: 5;
  }
`

const AnswersStyle = styled(SvgStyle)`

  path {
    stroke: #fff;
    stroke-linecap: round;
    stroke-width: 4;
    -webkit-transition: opacity 0.1s;
    transition: opacity 0.1s;
  }
`

export const CheckmarkStyle = styled(AnswersStyle)`

  path {
    stroke: #fff;
    stroke-linecap: round;
    stroke-width: 4;
    -webkit-transition: opacity 0.1s;
    transition: opacity 0.1s;
  }
`

export const CrossStyle = styled(AnswersStyle)`

  path {
    stroke: #fff;
    stroke-linecap: round;
    stroke-width: 4;
    -webkit-transition: opacity 0.1s;
    transition: opacity 0.1s;
  }
`

//main container style

export const ProgressButtonStyle = styled.div<IProgressButtonStyle>`
  position: relative;
  display: inline-block;
  text-align: center;

  button {
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 250px;
    height: 70px;
    border: 2px solid #1ECD97;
    border-radius: 40px;
    background: transparent;
    color: #1ECD97;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    -webkit-transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s;
    transition: background-color 0.3s, color 0.3s, width 0.3s, border-width 0.3s, border-color 0.3s;

    &:hover {
      background-color: #1ECD97;
      color: #fff;
    }
    
    &:disabled {
      background-color: transparent;
      color: #fff;
    }

    &:focus {
      outline: none;
    }
  }
  
  span {
    transition: opacity 0.3s 0.1s;
  }

  ${ProgressCircleStyle} path {
    stroke-dasharray: ${(props) => props.pathCircle};
    stroke-dashoffset: ${(props) => props.pathCircle};
  }
  
  ${CheckmarkStyle} path {
    stroke-dasharray: ${(props) => props.pathCheckmark};
    stroke-dashoffset: ${(props) => props.pathCheckmark};
  }
  
  ${CrossStyle} path {
    stroke-dasharray: ${(props) => props.pathCross};
    stroke-dashoffset: ${(props) => props.pathCross};
  }

  ${props => props.loading && css`
    button {
      width: 70px; /* make a circle */
      border-width: 5px;
      border-color: #ddd;
      background-color: transparent;
      color: #fff;
    }
    
    span {
      transition: opacity 0.15s;
      opacity: 0; /* keep it hidden in all states */
    }

    ${ProgressCircleStyle} path {
      opacity: 1;
      transition: stroke-dashoffset 0.3s;
      
      animation: circle 2s linear forwards;
    }
  `}  
  
  ${props => props.success && css`
    span {
      opacity: 0;
    }
    
    button {
      transition: background-color 0.3s, width 0.3s, border-width 0.3s;
      border-color: #1ECD97;
      background-color: #1ECD97;
    }

    ${CheckmarkStyle} path {
      opacity: 1;
      transition: stroke-dashoffset 0.3s;

      animation: checkmarkAnimation 0.3s linear forwards;
    }
  `}  
  
  ${props => props.error && css`
    span {
      opacity: 0;
    }
    
    button {
      transition: background-color 0.3s, width 0.3s, border-width 0.3s;
      border-color: #FB797E;
      background-color: #FB797E;
    }

    ${CrossStyle} path {
      opacity: 1;
      transition: stroke-dashoffset 0.3s;

      animation: cross 0.3s linear forwards;
    }
  `}

  @keyframes circle {
    from {
      stroke-dashoffset: ${(props) => props.pathCircle};
    }
    to {
      stroke-dashoffset: 0;
    }
  };
  
  @keyframes checkmarkAnimation {
    from {
      stroke-dashoffset: ${(props) => props.pathCheckmark};
    }
    to {
      stroke-dashoffset: 0;
    }
  };
  
  @keyframes cross {
    from {
      stroke-dashoffset: ${(props) => props.pathCross};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`