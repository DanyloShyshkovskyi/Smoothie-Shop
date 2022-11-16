import styled, {css} from "styled-components";

export const SPACE_DEFAULT = 20;
export const PADDING_DEFAULT = 25;

export const HEADER_HEIGHT = 70;

export const ListReset = styled.ul`
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
`

export const AppStyle = styled.div<{ isOpen: boolean }>`
  text-align: center;
  height: 100%;
  width: 100%;

  ${props => props.isOpen && css`
    overflow: hidden;
  `}
`

export const ButtonReset = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: black;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out,
  transform 150ms ease,
  opacity 250ms ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 10px;

  &:hover,
  &:focus {
    background: black;
  }

  &:focus {
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
  }
`