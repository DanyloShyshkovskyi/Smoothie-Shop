import styled from 'styled-components'
import {ButtonReset} from "../../../utils/helpers/style.helpers";
import {device} from "../../../utils/constants/mediaQuery.constants";

export const ProductTitle = styled.h1`
  font-size: 20vw;
  text-transform: uppercase;
  font-weight: 700;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin: 0;
`

export const ProductFindText = styled.h4`
  position: absolute;
  left: 100px;
  top: 100px;
  z-index: 1;
  
  span {
    font-weight: 700;
    font-size: 19px;
  }

  ${device.tablet`
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 10px
  `}
`

export const ProductButton = styled(ButtonReset)`
  position: absolute;
  bottom: 100px;
  left: 100px;
  z-index: 1;

  &:disabled {
    &:active {
      transform: scale(1);
    }
  }

  ${device.tablet`
      position: sticky;
      top: 145px;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 1.5rem;
      box-sizing: border-box;
      z-index: 3;
      margin-top: 20px
  `
  }
`

export const ProductDescription = styled.div`
  font-size: 12px;
  position: absolute;
  bottom: 100px;
  right: 100px;
  max-width: 300px;
  z-index: 1;
  
  h1 {
    font-size: 18px;
    
    span {
      color: #AECD31;
    }
  }

  ${device.tablet`
      position: relative;
      bottom: 0;
      right: 0;
      width: 100%;
      padding: 1.5rem;
      box-sizing: border-box;
      max-width: none;
  `
  }
`

export const SliderCount = styled.h5`
  position: absolute;
  top: 100px;
  right: 100px;
  user-select: none;

  span {
    font-size: 30px;
    font-weight: 700;
  }
  
  ${device.tablet`
    position: relative;
    top: 0;
    right: 0;
    margin: 0;
    padding: 10px
  `}
`

// To Delete

// const float = keyframes`
//   0% {
//     transform: translate(-50%, -46%);
//   }
//   50% {
//     transform: translate(-50%, -54%);
//   }
//   100% {
//     transform: translate(-50%, -46%);
//   }
// `

export const ProductImg = styled.img`
  z-index: 1;
  user-select: none;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  ${device.tablet`
      height: 50%;
  `}
`