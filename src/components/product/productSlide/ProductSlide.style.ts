import styled from 'styled-components'
import {ButtonReset} from "../../../utils/helpers/style.helpers";

export const ProductTitle = styled.h1`
  font-size: 200px;
  text-transform: uppercase;
  font-weight: 700;
  position: absolute;
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
  height: 100%;
  max-height: 600px;
  z-index: 1;
  user-select: none;
`