import styled, {css} from "styled-components";
import {ButtonReset, PADDING_DEFAULT} from "@helpers/style.helpers";
import {IProductCountButton} from "@customTypes/style.types";
import {device} from "@constants/mediaQuery.constants";

export const ProductCartView = styled.div`
  height: 70px;
  padding: ${PADDING_DEFAULT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px darkgrey solid;
  //opacity: 0;
`

export const ProductCartImage = styled.img`
  height: 100px;
  margin-top: 15px;
`

export const ProductCartName = styled.h1`
  font-size: 13px;
  text-transform: capitalize;
  margin: 0 10px;
`

export const ProductCountContainer = styled.div`
  display: flex;
  gap: 20px;

  ${device.tablet`
      gap: 10px;
    `}
`

export const ProductCountButton = styled(ButtonReset)<IProductCountButton>`
  min-width: 25px;
  min-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  color: black;
  background: transparent;

  &:hover,
  &:focus {
    background: transparent;

    ${props => props.minus && css`
      color: darkred;
    `}

    ${props => props.plus && css`
      color: darkseagreen;
    `}

  }
`

export const ProductCounter = styled.div`
  font-size: 13px;
  line-height: 25px;
  font-weight: 600;
  min-width: 10px;
  max-width: 11px
`

export const ProductCartPrice = styled.div`
  color: darkseagreen;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
  min-width: 10px;
  max-width: 30px;
  margin-left: 20px;
`

export const NoContent = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: darkgrey;
  padding: 50px 20px;
`